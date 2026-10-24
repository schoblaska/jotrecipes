<div align="center">
  <img width="400px" src="https://raw.githubusercontent.com/schoblaska/jotrecipes/main/docs/logo-dark@2x.png#gh-dark-mode-only" />
  <img width="400px" src="https://raw.githubusercontent.com/schoblaska/jotrecipes/main/docs/logo-light@2x.png#gh-light-mode-only" />

  <a href="https://jot.recipes">jot.recipes</a>
</div>

A tool for converting Markdown recipes into a printable card format from Ben Cohen's [cuisine package](http://ftp.gwdg.de/pub/ctan/macros/latex/contrib/cuisine/cuisine.pdf) for LaTeX. This format puts the ingredients and instructions for each step side-by-side, making it easier to scan while you're cooking.

<p align="center">
  <a href="https://jot.recipes">
    <img src="https://raw.githubusercontent.com/joeyschoblaska/jotrecipes/main/docs/screenshot.png">
  </a>
</p>

## Development
Jot Recipes is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It stores shared recipes in SQLite through [Prisma](https://www.prisma.io/). To run it locally:

```
git clone git@github.com:joeyschoblaska/jotrecipes.git
cd jotrecipes
cp .env.example .env
yarn
yarn prisma migrate dev
yarn dev
```

`yarn prisma migrate dev` creates `prisma/dev.sqlite`, applies the migrations, and generates the Prisma client into `src/generated` (gitignored). Rerun `yarn prisma generate` after pulling schema changes.

Other scripts:

* `yarn test` runs the Jest suite
* `yarn lint` runs ESLint
* `yarn prisma db seed` loads a sample recipe

## Deployment
Pushes to `main` build the Docker image and push it to the registry as `jotrecipes:latest`. The container runs `prisma migrate deploy` before starting the server, so it expects `DATABASE_URL` to point at a SQLite file on a mounted volume (for example `file:/data/prod.sqlite`).

## TODO
* Drop title column from Recipe table?
* Seasonal default recipes
* Printing
  * Simple two-column by default? ([one](https://stackoverflow.com/a/43429947), [two](https://github.com/gregnb/react-to-print#set-the-page-orientation))
  * [Soft page breaks](https://github.com/gregnb/react-to-print/issues/333)?
  * Optional page sizes / layouts (let user select; eg, print on regular paper or print on index cards; landscape two-column?) ([Canva: Design a Custom Recipe Card - Canva](https://www.canva.com/create/recipe-cards/))
  * Optional font sizes
  * Include something in "about" section that links to a service that can print PDF onto actual recipe / index cards?;
  * Save printing preferences to localstorage or something
* Handle error response from POST in ShareModal.handleSubmit()
* HTML title for shared recipe page
* Better tests for formatRecipes()
* Better share modal styles / loading state (remove the intermediary "click here" step?)
* Make sure that hitting the CMD + P to print does something sensible (on both home page and recipe page - the easiest way might be to add print:none to everything except the printable div)
* When something changes, briefly highlight it in the preview pane?
* Better mobile experience
* Error pages
* robots.txt that prevents indexing of recipe pages (since it's user-generated content and there might be weird stuff in there)
* Log errors to... somewhere if `createRecipe()` fails
* Persist editor content to localstorage, with some way to reset (since the default placeholder is the only thing that shows how to use the format)
* Show a popup the first time a user views the editor / homepage that explains how the app works
