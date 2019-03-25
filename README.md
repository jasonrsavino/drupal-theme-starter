
# Drupal 8 Theme Starter

This is a starter Drupal 8 theme that uses the Bootstrap 4 Frontend Framework.

## Setup

[Duplicate this repo](https://help.github.com/en/articles/duplicating-a-repository) and rename RENAME to your new theme name in these files:

- ./composer.json
- ./gulpfile.js
- ./scss/RENAME.scss
- ./RENAME.info.yml
- ./RENAME.libraries.yml

## Install dependencies
- `npm install`

## Add SCSS files
- Add new scss files you need as `./scss/_newcomponent.scss`
- Add them to be included at the bottom of `./scss/RENAME.scss`
  - We're not globbing by default because it's significantly slower, but if your project will require a very large number of files, it could be useful to add.
  
## Add JS files
JS can be added in `./js` and will be bundled together by gulp.
