# tjb-statusbar

Webcomponents statusbar

## Features

- beautiful
- easy to use
- accessible
- time saving

## Example

https://tjb-webcomponents.github.io/tjb-statusbar/

## Add to project

You might want to use a Polyfill for WebComponent:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js"></script>
```

### Include via HTML

Include it:

```html
<script
  src="https://tjb-webcomponents.github.io/tjb-statusbar/tjb-statusbar.min.js"
  type="module"
></script>
```

### Include via JavaScript

```JavaScript
import 'https://tjb-webcomponents.github.io/tjb-statusbar/tjb-statusbar.min.js'
```

### Include via NPM

Console:

```bash
npm i -S tjb-statusbar
```

Then in your code:

```JavaScript
import 'tjb-statusbar';
```

## Useage

```html
<tjb-statusbar></tjb-statusbar>
```

With all attributes:

```html
<tjb-statusbar status="loading"></tjb-statusbar>
```

- `status` can be `loading` | `alert` | `success` | `info`
- can be triggered programmatically: `tjbStatusbar.status = 'alert'`

## Styling

Default public values:

```css
:host {
  --statusbar-width: 100%;
  --statusbar-height: 5px;
  --statusbar-position: absolute;
  --statusbar-left: 0;
  --statusbar-bottom: 0;
  --statusbar-top: auto;
  --statusbar-right: auto;
  --status-loading: linear-gradient(
    to right,
    #4cd964,
    #007aff,
    #ff2d55,
    #5856d6,
    #4cd964
  );
  --status-alert: #fa354c;
  --status-success: #4cd964;
  --status-info: #007aff;
}
```

These can be overwritten easily by targeting the element. Example:

```css
tjb-statusbar {
  --status-alert: red;
}
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)
