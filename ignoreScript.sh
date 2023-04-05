#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_BRANCH: $VERCEL_GIT_COMMIT_REF"
IS_FRESH=$(git name-rev HEAD | grep $VERCEL_GIT_COMMIT_REF)

if [[ -z $IS_FRESH ]] ; then
  echo "🛑 - Build cancelled"
  exit 0;
else
  echo "✅ - Build can proceed"
  exit 1;
fi