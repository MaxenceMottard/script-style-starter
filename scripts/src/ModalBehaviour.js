import MenuBehaviour from "./MenuBehaviour";

// @TODO: Add accessibility

class ModalBehaviour extends MenuBehaviour {
    constructor({ elementSelector, btnSelector: openBtnSelector, closeBtnSelector, accessibility = true, accessibilityBreakpoint = 10000 }) {
        super({ elementSelector, openBtnSelector, accessibility, accessibilityBreakpoint })
        this.closeButton = document.querySelector( closeBtnSelector )

        super.addEventOnButton( this.closeButton )
    }
}

export default ModalBehaviour
