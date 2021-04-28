EventTarget.prototype.fireEvent = function (evName, bubbles = false, cancelable = true) {
    let ev = new Event(evName);
    ev.initEvent(evName, bubbles, cancelable);
    return this.dispatchEvent(ev);
};

HTMLSelectElement.prototype.change = function (value) {
    this.value = value;
    return this.fireEvent('change');
};