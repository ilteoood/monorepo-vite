# monorepo-vite
Repository used for the talk "Monorepo: come te li miglioro con un cacciaVite"

## Step 1: initial situation

In this branch we have the initial situation: a monorepo with a UI library and the application source code.

The library uses Rollup as bundler, while the application is created with create-react-app.

This repository has three big problems:
- the dependencies size in the `ui` package;
- the amount of JavaScript downloaded at app boot;
- the build time;