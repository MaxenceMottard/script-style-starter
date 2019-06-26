import ModalBehaviour from "./ModalBehaviour";

// @TODO: Add accessibility

class SearchModalBehaviour extends ModalBehaviour {
    constructor({ elementSelector, openBtnSelector, closeBtnSelector, accessibility = true, accessibilityBreakpoint = 10000 }) {
        super({ elementSelector, openBtnSelector, closeBtnSelector, accessibility, accessibilityBreakpoint })
        this.inputSearch = document.querySelector( elementSelector ).querySelector( 'input[type=search]' )
    }

    open(e) {
        super.open(e)
        this.inputSearch.focus()
    }
}

export default SearchModalBehaviour
