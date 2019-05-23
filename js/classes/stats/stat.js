class Stat {

    constructor(name, value, max) {
        this.name = name;
        this.value = value;
        this.max = max;
    }

    init() {
        let node = document.createElement('li');
        const textNode = this.getText();
        node.appendChild(textNode);
        document.querySelector('#stats > ul').appendChild(node);
    }

    getText() {
        let template = `${this.name} : ${this.value}`;

        if (this.max > 0) {
            template += ` / ${this.max}`;
        }

        return document.createTextNode(template);
    }

    update() {

    }

    /**
     * @returns {*}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param value
     */
    setValue(value) {
        this.value = value;
    }

    /**
     * @param max
     */
    setMax(max) {
        this.max = max;
    }

    /**
     * @param increment
     */
    incrementValue(increment) {
        if (this.getValue() + increment <= this.max) {
            this.setValue(this.getValue() + increment);
            return true;
        } else {
            return false;
        }
    }
}
