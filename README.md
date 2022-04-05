# monorepo-vite
Repository used for the talk "Monorepo: come te li aggiusto con un cacciaVite"

## Step 2: dependencies refactor

Thanks to `rollup-plugin-visualizer`, the `ui` package is able to produce the `stats.html` file.

The `stats.html` file contains a graph that represents the size of each dependency.

As you can see, `lodash` and `moment` are the heaviest one after `monaco-editor`.

In this repo, we are going to reduce the bundle size using another library (es: `datejs`) or using a different way to import a required function `es: lodash`:
all of keeping the initial functionalities.