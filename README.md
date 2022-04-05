# monorepo-vite
Repository used for the talk "Monorepo: come te li aggiusto con un cacciaVite"

## Step 4: Vite library

This time we are going to install Vite in the UI library.

As you can see we removed lots of `devDependencies` from it (all the rollup plugins, except `rollup-plugin-visualizer`).

Thanks to Vite, the build time of the `ui` library has been halved.