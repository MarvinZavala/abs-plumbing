#!/bin/zsh
# Renders the Google Business Profile cover at 2x: ../ab-plumbing-cover.jpg (photos only) and ../ab-plumbing-cover-branded.jpg.
set -e; cd "$(dirname "$0")"
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for v in plain branded; do
  Q=""; [ $v = branded ] && Q="?brand=1"
  P=$(mktemp -d)
  "$C" --headless=new --disable-gpu --hide-scrollbars --no-first-run --user-data-dir=$P --allow-file-access-from-files \
    --force-device-scale-factor=2 --window-size=1080,608 --virtual-time-budget=8000 --screenshot=/tmp/abs-cover-$v.png "file://$PWD/cover.html$Q" >/dev/null 2>&1
  N=../ab-plumbing-cover.jpg; [ $v = branded ] && N=../ab-plumbing-cover-branded.jpg
  node -e "require('$HOME/Dev/abs-plumbing/node_modules/sharp')('/tmp/abs-cover-$v.png').jpeg({quality:90,mozjpeg:true,chromaSubsampling:'4:4:4'}).toFile('$N').then(i=>console.log('$N',i.width+'x'+i.height,Math.round(i.size/1024)+'KB'))"
  rm -rf $P /tmp/abs-cover-$v.png
done
