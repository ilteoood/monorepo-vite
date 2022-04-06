# monorepo-vite
Repository used for the talk "Monorepo: come te li aggiusto con un cacciaVite"

## Step 6: Dynamic import + code splitting

Now it's time to use the Dynamic Import + Code Splitting for our biggest UI dependency: `monaco-editor`.

This operation allows us to halve the initial JavaScript chunk size of each page, because `monaco-editor` now is loaded only when needed.