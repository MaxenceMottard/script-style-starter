class ToggleState {
    constructor({ btnSelector, accessibility = true, openCallback = null, closeCallback = null, accessibilityBreakpoint }) {
        this.isOpen = false
        this.btns = Array.from(document.querySelectorAll( btnSelector ))
        this.accessibility = accessibility
        this.openCallback = openCallback
        this.closeCallback = closeCallback
        this.accessibilityBreakpoint = accessibilityBreakpoint

        window.addEventListener('click', (e) => {
            if ( this.isOpen ) {
                this.close(e)
            }
        })

        this.btns.forEach( button => {
            this.addEventOnButton(button)
        })

        window.addEventListener('resize', this.accessibilityToggle)
        this.accessibilityToggle()
    }

    addEventOnButton( button ) {
        if ( !button ) {
            return
        }

        button.addEventListener( 'click', (e) => {
            this.handleClick(e)
        })
    }

    handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()

        if ( this.isOpen ) {
            this.close(e)
        } else {
            this.open(e)
        }
    }

    open(e){
        this.isOpen = true

        this.accessibilityToggle()

        if (this.openCallback){
            this.openCallback()
        }
    }

    close(e){
        this.isOpen = false

        this.accessibilityToggle()

        if (this.closeCallback){
            this.closeCallback()
        }
    }

    accessibilityToggle() {
        if (!this.accessibility) {
            return
        }

        if (window.innerWidth > this.accessibilityBreakpoint) {
            this.btns.forEach( btn => {
                btn.removeAttribute('aria-expanded')
            })
        }  else if (window.innerWidth < this.accessibility && this.isOpen) {
            this.btns.forEach( btn => {
                btn.setAttribute('aria-expanded', true)
            })
        } else {
            this.btns.forEach( btn => {
                btn.setAttribute('aria-expanded', false)
            })
        }
    }
}

export default ToggleState
