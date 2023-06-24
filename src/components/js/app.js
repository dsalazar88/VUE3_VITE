
const index = {

    classCounter(counter) {

        if (counter.value == 0) {
            return "zero"
        }

        if (counter.value > 0) {
            return "positive"
        }

        if (counter.value < 0) {
            return "negative"
        }
    },

    blockBtnAdd(favorites_number, counter) {
        if (favorites_number.value.indexOf(counter.value) != -1) {
            return true
        } else {
            return false
        }
    }

}


export {
    index
}