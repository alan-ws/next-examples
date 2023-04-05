#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_BRANCH: $VERCEL_GIT_COMMIT_REF"

if [[ "git rev-list --count HEAD" > 1 ]] ; then
  echo "✅ - Build can proceed"
  exit 1;
else
  echo "🛑 - Build cancelled"
  exit 0;
fi