<div align="center">
  <h1 align="center"><a href="https://www.epicweb.dev/epic-stack">The Epic Stack with @jsx-email 🚀</a></h1>
  <strong align="center">
    Ditch analysis paralysis and start shipping Epic Web apps.
  </strong>
  <p>
    This is an opinionated project starter and reference that allows teams to
    ship their ideas to production faster and on a more stable foundation based
    on the experience of <a href="https://kentcdodds.com">Kent C. Dodds</a> and
    <a href="https://github.com/epicweb-dev/epic-stack/graphs/contributors">contributors</a>.
  </p>
</div>

## Usage

- Run the app as usual with `npm run dev`
- Run the emails preview app with `npm run emails:preview`

## Differences

- replaced dependency to `@react-email/components` by `@jsx-email/all`
- emails have been extracted into dedicated files in the `/app/emails` folder
- import statements from `@react-email/components` have been changed to `@jsx-email/all`
- each email now have both a named export for usage in the remix code and a default export for the JSX-Email preview app
- each email now declare a `PreviewProps` for the JSX-Email preview app
- `remix.config.js` now have a `serverDependenciesToBundle` property containing the packages needed for JSX-Email
