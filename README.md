# HTMLSelectElement.change
This is a polyfill for HTML DOM Select Elements to change their value and automatically fire the onchange event.

## Usage

Import the polyfill through a `<script>`, and change value by calling `someHTMLSelectElement.change()`. 

```js
<script src="HTMLSelectElement.change.js"></script>
<script>
    let element = document.getElementById('select-element');
    element.change('some-option');
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright © ROC 110 (2021), veringsek