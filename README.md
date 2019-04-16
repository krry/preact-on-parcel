# Preact-on-Parcel

[Preact](https://preactjs.com) does much of what React can do with only 3kb of ugly gzip. [Parcel](https://parceljs.org) is a zero-config bundler/builder that smells like `webpack` but tastes (and works) like **Wonka**. P-o-P them together for a very simple, lightweight front-end for your web apps.

## How to Create a Preact-on-Parcel web app

#### 1. First, draw a blank...dir.

``` shell
mkdir -p preact-parcel-app/src  # the -p flag makes any parents necessary
cd preact-parcel-app
```

#### 2. Let `yarn` initialize things.

``` shell
yarn init -y                    # the -y flag says 'yes' to the init questions
```

#### 3. Then have `yarn` install our slim dependencies.

``` shell
yarn add -D parcel-bundler      # -D flag to --save-dev
yarn add preact preact-compat   # as in compat with react
```

#### 4. Add a command to `package.json` to get the dev train rolling.

``` json
{
  "scripts": {
    "dev": "parcel src/index.html --open"
  }
}
```

At this point, if you're following along, you may realize you could just be cloning [the Preact Parcel starter kit repo](https://github.com/krry/preact-on-parcel) and renaming it to be your own. If instead you're the defiant DIY type, type on.

#### 5. Next we make an entry point for `parcel`: `vim src/index.html`

``` html
<!-- src/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Preparcelact</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

#### 6. Now we'll need that script we mention, somewhere to mount the Preact app.

``` js
// src/index.js
import { h, render } from 'preact';
import App from './App';

const mountNode = document.getElementById('app');
render(<App/>, mountNode, mountNode.lastChild);
```

#### 7. Then we'll need an App Component.

``` jsx
/* src/App.jsx */
import { h, Component } from "preact";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Parcel Mroust: Preactionary!</h1>
      </div>
    )
  }
}
```

#### 8. Lastly a few styles to make it clear that it worked.

``` css
/* src/App.css */
body {
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  color: #e2e4e8;
  background-color: #222428;
}
```

#### 9. Run it. SHAMWOW!
``` shell
yarn dev
```

---

## Configuring the zero-config Parcel bundler

Parcel can handle all manner of assets. It sits in wait, ready to automagically install dependencies when you start using them. There are a bunch of bundles and build features that Parcel can sniff out from a runcom or config file.

* PostCSS = `.postcssrc`
* Browserslist = `.browserslistrc`
* Babel = `.babelrc`

The cool part about these little runcoms is how portable they are. Just copy and drop them into a new project. For instance, [let's say you want to autoprefix your css](https://parceljs.org/css.html). Add your autoprefixer settings to a runcom saved as `.postcssrc` or `postcss.config.js`.

``` json
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
```

Save that file. You may have to stop and restart parcel, you may not. The other way to add features to the Parcel build is via `yarn`/`npm`. So [if you want to write your styles in Sass](https://parceljs.org/scss.html), there's a oneliner for that:

``` shell
yarn add -D sass
```

### Proposed to AwesomeStacks.dev[↗](https://awesomestacks.dev/preact-on-parcel)

A supersonic, featherweight, teflon front-end web app starter kit. Start here, go anywhere. Young tech, but zen af. *Caveat devsigner: this kit has not been battle-tested.*

- [Preact](https://preactjs.com) - [🛠](https://stackshare.io/preact) - [🐙](https://github.com/developit/preact/)
- [Parcel](https://parceljs.org) - [🛠](https://stackshare.io/parcel) - [🐙](https://github.com/parcel-bundler/parcel)

#### Add'l Resources
- [The AMA with Preact's author Jason Miller](https://jasonformat.com/preact-ama-on-sideway/).
- [On the Atmanaut blog: Create a Preact app with Parcel](https://atmanaut.us/create-a-preact-app-with-parcel)
