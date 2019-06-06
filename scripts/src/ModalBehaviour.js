import MenuBehaviour from "./MenuBehaviour";

// @TODO: Add accessibility

class ModalBehaviour extends MenuBehaviour {
    constructor({ elementSelector, openBtnSelector, closeBtnSelector }) {
        super({ elementSelector, openBtnSelector })
        this.closeButton = document.querySelector( closeBtnSelector )

        super.addEventOnButton( this.closeButton )
    }
}

export default ModalBehaviour
