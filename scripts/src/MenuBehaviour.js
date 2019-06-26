import ToggleState from "./ToggleState";

class MenuBehaviour  extends ToggleState{
    constructor({ elementSelector, btnSelector, openCallback = null, closeCallback = null, accessibility = true, accessibilityBreakpoint = 10000 }) {
        super({ btnSelector, openCallback, closeCallback, accessibility, accessibilityBreakpoint })

        const element = document.querySelector(elementSelector)
        const elementName = this.selectorToString( elementSelector )

        this.selectables = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]')
        this.accessibilityIndexToggle()

        this.bodyClassOpen = 'js-' + elementName + '--open'
        this.bodyClassClose = 'js-' + elementName + '--close'

        element.addEventListener('click', (e) => {
            e.stopPropagation()
        })
        document.addEventListener( 'keydown', this.escape )
        window.addEventListener( 'resize', this.accessibilityIndexToggle )
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

        this.accessibilityIndexToggle()
    }
    close(e) {
        super.close(e)
        document.body.classList.remove( this.bodyClassOpen )
        document.body.classList.add( this.bodyClassClose )

        this.accessibilityIndexToggle()
    }

    selectorToString = ( selector ) => {
        let string = selector.replace( '.', '' )
        string = string.replace( '#', '' )

        return string
    }

    accessibilityIndexToggle = () => {
        if (!this.accessibility) {
            return
        }

        if (!this.selectables) {
            return
        }
        if (window.innerWidth > this.accessibilityBreakpoint || window.innerWidth < this.accessibilityBreakpoint && this.isOpen) {
            this.selectables.forEach( selectable => {
                selectable.removeAttribute('tabindex')
            })
        } else {
            this.selectables.forEach( selectable => {
                if (this.btns.indexOf(selectable) !== -1) {
                    return
                }
                selectable.setAttribute('tabindex', -1)
            })
        }
    }
}

export default MenuBehaviour
