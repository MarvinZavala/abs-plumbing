import { Star, CheckCircle } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
  location?: string;
}

export default function TestimonialCard({ 
  name, 
  rating, 
  review, 
  date, 
  verified = true,
  location 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            {location && (
              <p className="text-sm text-gray-500">{location}</p>
            )}
          </div>
        </div>
        {verified && (
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs font-medium">Verified</span>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${
                i < rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300'
              }`} 
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{rating}/5</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed mb-4">&quot;{review}&quot;</p>

      {/* Date and Yelp Badge */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">{date}</span>
        <div className="flex items-center space-x-1">
          <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            yelp
          </div>
          <span className="text-gray-500 text-xs">Review</span>
        </div>
      </div>
    </div>
  );
}