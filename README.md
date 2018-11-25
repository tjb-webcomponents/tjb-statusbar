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
  --color-error: #fa354c;
  --input-padding: 10px;
  --input-margin: 0 0 30px 0;
  --input-width: 100%;
  --input-font-size: 1rem;
  --info-color: grey;
  --info-font-size: 0.8rem;
}
```

These can be overwritten easily by targetting the element. Example:

```css
tjb-statusbar {
  --input-width: 300px;
}
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)
