import { h, Component } from "preact";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>⚛︎ Preact-on-Parcel 🎁</h1>
        <p>
          <a href="https://github.com/krry/preact-on-parcel">Github</a>
          <a href="https://preact-on-parcel.now.sh">Example</a>
          <a href="https://atmanaut.us/2019/04/create-a-preact-on-parcel-spa-in-a-jiffy/">Blog Article</a>
        </p>
        <p>A supersonic, featherweight, teflon-zen
          <br/>front-end web app starter kit.</p>
        <ul class="linky">
          <li>
            <a href="https://stackshare.io/preact">🛠</a>
            <a href="https://preactjs.com">Preact</a>
            <a href="https://github.com/developit/preact/">🐙</a>
          </li>
          <li>
            <a href="https://stackshare.io/parcel">🛠</a>
            <a href="https://parceljs.org">Parcel</a>
            <a href="https://github.com/parcel-bundler/parcel">🐙</a>
          </li>
        </ul>
      </div>
    )
  }
}
