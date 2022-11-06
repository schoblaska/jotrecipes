<div align="center">
  <img width="400px" src="https://raw.githubusercontent.com/joeyschoblaska/jotrecipes/main/docs/logo-dark@2x.png#gh-dark-mode-only" />
  <img width="400px" src="https://raw.githubusercontent.com/joeyschoblaska/jotrecipes/main/docs/logo-light@2x.png#gh-light-mode-only" />

  <a href="https://jot.recipes">jot.recipes</a>
</div>

A tool for converting Markdown recipes into a printable card format from Ben Cohen's [cuisine package](http://ftp.gwdg.de/pub/ctan/macros/latex/contrib/cuisine/cuisine.pdf) for LaTeX. This format puts the ingredients and instructions for each step side-by-side, making it easier to scan while you're cooking.

<p align="center">
  <a href="https://jot.recipes">
    <img src="https://raw.githubusercontent.com/joeyschoblaska/jotrecipes/main/docs/screenshot.png">
  </a>
</p>

## Development
Jot Recipes is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). You can run it locally with the following commands:

```
git clone git@github.com:joeyschoblaska/jotrecipes.git
cd jotrecipes
yarn
yarn dev
```

## TODO
* Update dev instructions with env var / db setup
* Drop title from Recipe table?
* Rethink project lede. Use something like "pastebin for recipes"?
* Seasonal default recipes
