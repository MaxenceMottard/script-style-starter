import MenuBehaviour from "./MenuBehaviour";

// @TODO: Add accessibility

class ModalBehaviour extends MenuBehaviour {
    constructor({ elementSelector, openBtnSelector, closeBtnSelector, openCallback = null, closeCallback = null, accessibility = true, accessibilityBreakpoint = 10000 }) {
        super({ elementSelector, btnSelector: openBtnSelector, accessibility, openCallback, closeCallback, accessibilityBreakpoint })
        this.closeButton = document.querySelector( closeBtnSelector )

        super.addEventOnButton( this.closeButton )
    }
}

export default ModalBehaviour
