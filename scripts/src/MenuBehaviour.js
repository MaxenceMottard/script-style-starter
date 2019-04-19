import ToggleState from "./ToggleState";

class MenuBehaviour  extends ToggleState{
    constructor( elementSelector, btnSelector ) {
        super( btnSelector )

        const element = document.querySelector(elementSelector)
        const elementName = this.selectorToString( elementSelector )
        this.bodyClassOpen = 'js-' + elementName + '--open'
        this.bodyClassClose = 'js-' + elementName + '--close'

        element.addEventListener('click', (e) => {
            e.stopPropagation()
        })
        document.addEventListener( 'keydown', this.escape )
    }

    escape = (e) => {

        if ( !this.isOpen ) {
            return
        }

        if ( e.key !== 'Escape' ) {
            return
        }

        this.close(e)
    }

    open(e) {
        super.open(e)
        document.body.classList.add( this.bodyClassOpen )
        document.body.classList.remove( this.bodyClassClose )
    }
    close(e) {
        super.close(e)
        document.body.classList.remove( this.bodyClassOpen )
        document.body.classList.add( this.bodyClassClose )
    }

    selectorToString = ( selector ) => {
        let string = selector.replace( '.', '' )
        string = string.replace( '#', '' )

        return string
    }
}

export default MenuBehaviour
