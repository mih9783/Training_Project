class Options {
    constructor( width, height, bg, fontSize, textAlign) {
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}rem; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }
}

const item = new Options(700, 300, "blue", 1.2, "left");

item.createDiv();
