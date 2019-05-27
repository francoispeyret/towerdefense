class Stat {

    constructor(name, value, max) {
        this.name = name;
        this.value = value;
        this.max = max;
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
    setMax(max)
    {
        this.max = max;
    }

    /**
     * @param increment
     */
    incrementValue(increment)
    {
        if (this.getValue() + increment <= this.max) {
            this.setValue(this.getValue() + increment);
            return true;
        } else {
            return false;
        }
    }
}
