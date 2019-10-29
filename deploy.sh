#!/bin/bash

zip -r -FS ../dnsdumpster.xpi * --exclude *.git* deploy.sh dnsdumpster.xpi README.md
mv ../dnsdumpster.xpi .
