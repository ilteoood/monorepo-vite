# monorepo-vite
Repository used for the talk "Monorepo: come te li aggiusto con un cacciaVite"

## Step 1: initial situation

In this branch we have the initial situation: a monorepo with a UI library and the application source code.

The library uses Rollup as bundler, while the application is created with create-react-app.

This repository has three big problem:
- The build time
- The dependencies size in the `ui` package
- The amount of JavaScript downloaded at boot