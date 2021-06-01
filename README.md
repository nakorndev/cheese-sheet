# Cheat Sheet Template

A minimalist for cheat sheet builder with Webpack.

**Demo:** [https://nakorndev.github.io/cheese-sheet/](https://nakorndev.github.io/cheese-sheet/)

> Noob English and grammar here. Edit me, please! 😅
>
> Note: for some reason npm not allow name contains 'cheat' work so I publish [https://www.npmjs.com/cheese-sheet](https://www.npmjs.com/cheese-sheet) instead

## Features

- Build project from `.md` file into `.html` file for the web page with [cascading grid](https://minigrid.js.org/) cheat sheet template.
- Print cheat sheet on the fly with pre-layout for A4.
- Simplistic CSS with [Bulma.css](https://bulma.io/).
- Colorful code with [Highlight.js](https://highlightjs.org/).
- SEO ready!

## Usage

1. Install package `npm install cheese-sheet`
2. Update information and document on `./data`
3. Use the command for sample `node src/main.js --dist=dist --cheatsheet=data/cheatsheet.md --info=data/info.json --logo=data/logo.png` to build a new cheat sheet.
4. Public your cheat sheet from a directory of `./dist`.

## Development

Use `npm run dev` to run development mode to watch all work directories, provide re-build cheat sheet with refresh webpage immediately.

## Structures

- `./data/cheatsheet.md` a file for store cheat sheet
- `./data/info.json` a piece of extra information for the cheat sheet template.

## Deploy to GitHub Pages

This project implements with [GitHub Actions](https://github.com/features/actions). So, to deploy the project you need to push a new tag into this repository and enable this feature on **Settings → GitHub Pages**

> Note: To push a new tag on GitHub it locate at URL `https://github.com/<user>/<repository>/releases/new`

## Custom favicon

To generate a new favicon, go to [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/) and then upload your image. Download the zip file and extract with replacing all files into the directory of `./static`.

> Note: This builder doesn't need a `site.webmanifest` file.

## Custom markdown builder

This project use [markdown-it](https://github.com/markdown-it/markdown-it) so, you can add more plugin by using `md.use()` into `./src/markdown-builder.js` file.
