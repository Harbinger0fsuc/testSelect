###### New version template
### The project is built using the following versions of the main utils:
# gulp 4.0.2
# gulp cli 2.3.0
# node.js v14.15.5 + 
# 7.20.2

### How to run the project
# npm i
# npm run build - for a build version
# npm run dist - for a distribution version


### Fonts NOTES
# Usually I don't use such modules as gulp-ttf2woff/gulp-ttf2woff2 to be able to control fonts manually (vertical metrics etc.). However, you can apply to them if need be
# Just uncomment their functions in other.js file  and remove "return" from "return $.gulp.src(....".
# Note for myself: use different font formats not only woff/woff2 to make sure everything is ok with old browsers (svg - old iphone; eot - ie; ttf, otf - old safari/opera).



### Retina NOTES
# On default - "gulp-responsive-imgz-ignore".
# If necessary one should use retina.js plugin.
# svg icons or font icons.
# In necessary you can implement retina manually by inserting srcset/sizes for <img> or using <picture> + corresponding css media queries. Picturefill as a polyfill! 



### BEM NOTES
# .header - block;
# .header__logo - block element;
# .header_mod - block modifier (.search-form_focused)
# .header_mod_val - block modifier + modifier's value (.search-form_theme_lite)
# .header__logo_mod - element modifier.
# .logo.logo_mod.header__logo.header__logo_mod
# .block__element.block-itself
# .block-itself__element
# .search-form.header__search-form - initially, general class!



### HTML NOTES
# if you want to minify your html please comment "gulpHtmlBeautify" pipe and uncomment "htmlmin" pipe



### JS/CSS vendors NOTES (How to add them via npm since I normally insert them locally).
# CSS files in style.scss "../node_modules/....";
# JS files in main.js - "//= ../../node_modules...";



### Favicon NOTES
# .ico on default
# if you need to provide a better favicon solution use: - html5 boiler plate/axioma project/saved articles (webmanifest, .svg, .png, browserconfig).
# realfavicongenerator. (not implemented by default)



### BOOTSTRAP NOTES
# Bootstrap grid 4 - 1) npm install 2) Import bootstrap grid from node_modules in style.scss
# Bootstrap grid 4 - 1) download from official website 2) Import bootstrap grid from node_modules in style.scss
# Bootstrap grid 5 - Identical way to the previous ones.
# Boostrap 4/5 full - Similar to the previous instructions but some features need .js files
# How to work with bootstrap settings when including full versions - 1) You mustn't change source files themselves. You should override variables/functions/mixins in a separate file (overrides.scss). 2) $grid-breakpoints - to override breakpoints /$container-max-widths - to override container (have a look at cordi project). 
# You should override boostrap variables in your own variables file (not override.scss). 
# You shouldn't import all boostrap just essential files (functions/variables/mixins etc.)...



### PUG NOTES
# You set up pug have a look at my old pug template + youtube "фронтендер".



### IMAGES NOTES
# One can take mixin (pug) for picture/2x images on youtube ("фронтендер")
# One can make a gulp task that converts simple images into webp. ("фронтендер", "HareCoder", "фрилансер по жизни" + others)



### CACHE NOTES
# You can have a look at how to implement cache cleansing on youtube ("max graph")



### Vanilla javascript modules + webpack
# max graph + Rusyn + similarweb;



### Different NOTES
# svgxuse - for ie11 (modernizr is too heavy).
# ie11-custom-properties - for ie11 (css-vars-ponyfill is too heavy).
# Modernizr should be used when you need to support more properties/features. You can use modernizr-config.json (not implemented by default)
# https://github.com/h5bp/html5-boilerplate - Modernizr is used here so have a look at it if need be. (not implemented by default)
# humans.txt (root) - https://humanstxt.org/ (not implemented by default)
# robots.txt (root) - https://www.robotstxt.org/ https://github.com/h5bp/html5-boilerplate/blob/master/src/robots.txt (not implemented by default)
# security.txt (.well-known/security.txt) - https://securitytxt.org/ (not implemented by default)
# Open Graph Metadata - https://github.com/h5bp/html5-boilerplate/blob/master/src/doc/html.md https://ogp.me/ or some info in my files.  (not implemented by default)
# .gitignore - https://docs.github.com/en/github/getting-started-with-github/getting-started-with-git/ignoring-files 
# .gitignore - https://github.com/github/gitignore
# .htaccess - https://github.com/h5bp/html5-boilerplate/blob/master/src/doc/misc.md#htaccess (not implemented by default)
# other info - https://github.com/h5bp/html5-boilerplate/blob/master/src/doc/extend.md (theme meta/web apps/URLs meta/Schema.org/RSS/Search/Translate/IE/Other meta)
# "npm i husky --save-dev" - only after you initialize git.
