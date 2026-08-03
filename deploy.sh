#!/bin/bash
set -e

# Create the site
RESPONSE=$(curl -s -X POST https://api.netlify.com/api/v1/sites \
  -H "Authorization: Bearer nfp_7VZwawWmczHkDfuJcLwiwGqjRn5PDrCD06be" \
  -H "Content-Type: application/json" \
  -d '{"name":"njforeclosure-guide"}')

SITE_ID=$(echo "$RESPONSE" | jq -r '.id')
SITE_URL=$(echo "$RESPONSE" | jq -r '.url')

echo "✓ Site created: $SITE_ID"
echo "✓ URL: $SITE_URL"

# Deploy the .next directory as static files
cd .next
zip -r -q ../deploy.zip . -x "*.map"
cd ..

curl -s -X POST "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys" \
  -H "Authorization: Bearer nfp_7VZwawWmczHkDfuJcLwiwGqjRn5PDrCD06be" \
  -H "Content-Type: application/zip" \
  --data-binary "@deploy.zip" | jq '{id: .id, state: .state, url: .url}'

echo ""
echo "✓ Deployment started!"
echo "✓ Site ID: $SITE_ID"
echo "✓ Temporary URL: $SITE_URL"
