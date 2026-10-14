'use client';

import { startTransition, useActionState, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { CircleCheck, TriangleAlert } from 'lucide-react';
import { business, telHref } from '@/content/business';
import { services } from '@/content/services';
import { parseLead, urgencyLabels, type FormState, type LeadField, type ServiceChoice, type Urgency } from '@/lib/lead';
import { submitLead } from '@/lib/submit-lead';
import { captureAttribution, readAttribution, track } from '@/lib/track';
import { cn } from '@/lib/utils';
import { buttonStyles } from './cta';
import { TrackedLink } from './tracked-link';

const initialState: FormState = { status: 'idle' };

const inputClass =
  'mt-1.5 block h-13 w-full rounded-control border-2 border-line bg-white px-4 text-[1.0625rem] text-ink placeholder:text-mute/70 focus:border-blue focus:outline-none aria-[invalid=true]:border-alert';

type Values = { name: string; phone: string; zip: string; service: ServiceChoice; urgency: Urgency; details: string };

export function EstimateForm({
  defaultService = 'not-sure',
  defaultUrgency = 'soon',
}: {
  defaultService?: ServiceChoice;
  defaultUrgency?: Urgency;
}) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState<Values>({
    name: '',
    phone: '',
    zip: '',
    service: defaultService,
    urgency: defaultUrgency,
    details: '',
  });
  const [clientErrors, setClientErrors] = useState<Partial<Record<LeadField, string>> | null>(null);
  const [meta, setMeta] = useState<{ startedAt: string; page: string; attribution: Record<string, string> }>({
    startedAt: '',
    page: '',
    attribution: {},
  });
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  useEffect(() => {
    // Capture here too: this effect can run before the layout's AttributionCapture on the landing page.
    captureAttribution(window.location.search);
    setMeta({ startedAt: String(Date.now()), page: window.location.pathname, attribution: readAttribution() });
  }, []);

  useEffect(() => {
    if (state.status === 'success') {
      track('lead_submit', { service: values.service, urgency: values.urgency });
      doneRef.current?.focus();
    }
    if (state.status === 'error' && state.fieldErrors) focusFirstInvalid(state.fieldErrors);
    // values are read at the moment of success only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const errors: Partial<Record<LeadField, string>> =
    clientErrors ?? (state.status === 'error' && state.fieldErrors ? state.fieldErrors : {});

  function focusFirstInvalid(found: Partial<Record<LeadField, string>>) {
    const first = (['name', 'phone', 'zip'] as LeadField[]).find((f) => found[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (clientErrors && key in clientErrors) {
      setClientErrors((e) => {
        const next = { ...e };
        delete next[key as LeadField];
        return next;
      });
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    // With JavaScript running we dispatch the action ourselves. Letting React run the form's action prop
    // would reset the form afterwards, which un-syncs the controlled radios if the server returns an error.
    // The action prop stays on the form so it still works without JavaScript.
    event.preventDefault();
    // Same rules as the server, so mistakes show up instantly instead of after a round trip.
    const check = parseLead({ ...values, ab_check: '', startedAt: '' }, Date.now());
    if (!check.ok && 'errors' in check) {
      setClientErrors(check.errors);
      focusFirstInvalid(check.errors);
      return;
    }
    setClientErrors(null);
    const data = new FormData(event.currentTarget);
    startTransition(() => formAction(data));
  }

  if (state.status === 'success') {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-button bg-white p-6 text-slate outline-none sm:p-8"
      >
        <CircleCheck className="size-10 text-go" aria-hidden="true" />
        <h3 className="type-h2 mt-3">{state.firstName ? `Got it, ${state.firstName}.` : 'Got it.'}</h3>
        <p className="type-lead mt-3">
          {state.phone ? (
            <>
              We’ll call you back at <strong className="whitespace-nowrap text-ink">{state.phone}</strong>.
            </>
          ) : (
            'We’ll call you back soon.'
          )}{' '}
          If water is still running or a drain is backing up, don’t wait for us to call. Call now:
        </p>
        <TrackedLink href={telHref} event="call_click" placement="form-success" className={cn(buttonStyles.call, 'mt-5 w-full sm:w-auto')}>
          Call {business.phone.display}
        </TrackedLink>
      </div>
    );
  }

  const field = (name: LeadField) => ({
    id: `${uid}-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-error` : undefined,
  });

  const fieldError = (name: LeadField) =>
    errors[name] ? (
      <p id={`${uid}-${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-[0.95rem] font-medium text-alert">
        <TriangleAlert className="size-4 shrink-0" aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-button bg-white p-5 text-slate sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-name`} className="font-semibold text-ink">
            Your name
          </label>
          <input
            {...field('name')}
            type="text"
            autoComplete="name"
            enterKeyHint="next"
            maxLength={80}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
          />
          {fieldError('name')}
        </div>

        <div>
          <label htmlFor={`${uid}-phone`} className="font-semibold text-ink">
            Phone
          </label>
          <input
            {...field('phone')}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            enterKeyHint="next"
            placeholder="(510) 555-0142"
            maxLength={20}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
          />
          {fieldError('phone')}
        </div>

        <div>
          <label htmlFor={`${uid}-zip`} className="font-semibold text-ink">
            ZIP code
          </label>
          <input
            {...field('zip')}
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            enterKeyHint="next"
            maxLength={10}
            value={values.zip}
            onChange={(e) => update('zip', e.target.value)}
            className={inputClass}
          />
          {fieldError('zip')}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-service`} className="font-semibold text-ink">
            What do you need help with?
          </label>
          <select
            id={`${uid}-service`}
            name="service"
            value={values.service}
            onChange={(e) => update('service', e.target.value as ServiceChoice)}
            className={cn(inputClass, 'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230a2239%22%20stroke-width%3D%222.5%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12')}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="font-semibold text-ink">How soon do you need us?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {(Object.keys(urgencyLabels) as Urgency[]).map((u) => (
            <label
              key={u}
              className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-control border-2 border-line px-3.5 py-2 leading-tight text-ink has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-blue"
            >
              <input
                type="radio"
                name="urgency"
                value={u}
                checked={values.urgency === u}
                onChange={() => update('urgency', u)}
                className="size-4 shrink-0 accent-action"
              />
              {urgencyLabels[u]}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor={`${uid}-details`} className="font-semibold text-ink">
          Anything we should know? <span className="font-normal text-mute">(optional)</span>
        </label>
        <textarea
          id={`${uid}-details`}
          name="details"
          rows={3}
          maxLength={1000}
          placeholder="What’s happening, where, and since when"
          value={values.details}
          onChange={(e) => update('details', e.target.value)}
          className={cn(inputClass, 'h-auto py-3')}
        />
      </div>

      {/* Spam trap: invisible to people, irresistible to bots. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="ab_check" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input type="hidden" name="startedAt" value={meta.startedAt} />
      <input type="hidden" name="page" value={meta.page} />
      {Object.entries(meta.attribution).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}

      {state.status === 'error' && !clientErrors && (
        <p role="alert" className="mt-5 flex gap-2 rounded-control bg-alert/10 p-3.5 font-medium text-alert">
          <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className={cn(buttonStyles.call, 'mt-6 w-full disabled:opacity-70')}>
        {pending ? 'Sending…' : 'Send my request'}
      </button>
      <p className="mt-3 text-[0.88rem] text-mute">
        We only use your details to answer this request.{' '}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy policy
        </Link>
      </p>
    </form>
  );
}
