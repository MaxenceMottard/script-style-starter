import ToggleState from "./ToggleState";

class MenuBehaviour  extends ToggleState{
    constructor({ elementSelector, btnSelector, openCallback = null, closeCallback = null, accessibility = true, accessibilityBreakpoint = 10000, openClass = 'active' }) {
        super({ btnSelector, openCallback, closeCallback, accessibility, accessibilityBreakpoint })

        this.element = document.querySelector(elementSelector)
        // const elementName = this.selectorToString( elementSelector )

        this.selectables = this.element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]')
        this.accessibilityIndexToggle()

        this.classOpen = openClass
        // this.classClosed = 'deactivated'

        this.element.addEventListener('click', (e) => {
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
        this.element.classList.add( this.classOpen )
        // this.element.classList.remove( this.classClosed )

        this.accessibilityIndexToggle()
    }
    close(e) {
        super.close(e)
        this.element.classList.remove( this.classOpen )
        // this.element.classList.add( this.classClosed )

        this.accessibilityIndexToggle()
    }

    // selectorToString = ( selector ) => {
    //     let string = selector.replace( '.', '' )
    //     string = string.replace( '#', '' )
    //
    //     return string
    // }

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
