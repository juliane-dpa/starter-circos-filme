#! /bin/bash

{
  # Webbrowser after 3 seconds, livereload should have started
  sleep 3 
  open http://0.0.0.0:18060
} &

# Reload on file change
# Install https://github.com/lepture/python-livereload first
livereload --host 0.0.0.0 -p 18060 public/




