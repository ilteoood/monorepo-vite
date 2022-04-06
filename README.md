# monorepo-vite
Repository used for the talk "Monorepo: come te li aggiusto con un cacciaVite"

## Step 7: bonus, legacy plugin

If you want to use Vite, but your target is an old browser, you can use `@vitejs/plugin-legacy`.

This plug-in will add a `nomodule` script tag, that will load the legacy bundle only when needed.