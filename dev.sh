#!/usr/bin/env bash

set -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20

kill -9 $(lsof -ti:3000) 2>/dev/null || true
rm -rf .next

next dev -p 3000 &
DEV_PID=$!

sleep 2
open "http://localhost:3000/" || true

wait "$DEV_PID"
