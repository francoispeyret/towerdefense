class Stat {

    constructor(name, value, max) {
        if(
            typeof name  === 'undefined' ||
            typeof value === 'undefined' ||
            typeof max   === 'undefined'
        ) {
            console.error('Stat has var undefined in constructor');
            return false;
        } else {
            this.name = name;
            this.value = value;
            this.max = max;
        }
    }

    init() {
        let node = document.createElement('li');
        const textNode = document.createTextNode(this.getText());
        node.classList.add(this.name);
        node.appendChild(textNode);
        document.querySelector('#stats > ul').appendChild(node);
    }

    /**
     * @returns template of text to show in interface
     */
    getText() {
        let template = `${this.name} : ${this.value}`;

        if (this.max > 0) {
            template += ` / ${this.max}`;
        }

        return template;
    }


    updateText() {
        const node = document.querySelector('#stats > ul > li.'+this.name);
        node.innerText = this.getText();
    }

    /**
     * @returns {*}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param value and update it in html
     */
    setValue(value) {
        this.value = value;
        this.updateText();
    }

    /**
     * @param maximum of stat's value
     */
    setMax(max) {
        this.max = max;
    }

    /**
     * @param amout increment to value
     */
    incrementValue(amout) {
        const nextValue = this.getValue() + amout;
        if (nextValue <= this.max || this.max===0) {
            this.setValue(nextValue);
            return true;
        } else {
            return false;
        }
    }
}
