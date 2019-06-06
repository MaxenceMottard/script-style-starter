import ModalBehaviour from "./ModalBehaviour";

// @TODO: Add accessibility

class SearchModalBehaviour extends ModalBehaviour {
    constructor({ elementSelector, openBtnSelector, closeBtnSelector }) {
        super({ elementSelector, openBtnSelector, closeBtnSelector })
        this.inputSearch = document.querySelector( elementSelector ).querySelector( 'input[type=search]' )
    }

    open(e) {
        super.open(e)
        this.inputSearch.focus()
    }
}

export default SearchModalBehaviour
