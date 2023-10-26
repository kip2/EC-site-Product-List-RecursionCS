#!/bin/bash
npm run build

{
    sleep 1
    open http://localhost:3000
} & 

serve ./dist
