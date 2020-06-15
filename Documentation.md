https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7

ng new some-amazing-project
ng add @nguniversal/express-engine --clientProject some-amazing-project
// Dynamic SSR
npm run build:ssr && npm run serve:ssr //http://localhost:4000
// Static Pre-Rendering
npm run build:prerender && npm run serve:prerender //http://localhost:8080