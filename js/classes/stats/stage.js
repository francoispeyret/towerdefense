class Stage extends Stat {



    /**
     * @param amout increment to value
     */
    incrementValue(amout) {


        const nextValue = this.getValue() + amout;

        mapObject.setNewLevelMap(nextValue);
        
        if (nextValue <= this.max || this.max===0) {
            this.setValue(nextValue);
            return true;
        } else {
            return false;
        }
    }


}
