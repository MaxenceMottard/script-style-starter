class ToggleState {
    constructor({ btnSelector, accessibility = true }) {
        this.isOpen = false
        this.btns = document.querySelectorAll( btnSelector )
        this.accessibility = accessibility

        window.addEventListener('click', (e) => {
            if ( this.isOpen ) {
                this.close(e)
            }
        })

        this.btns.forEach( (btn) => {
            this.addEventOnButton(btn)
        })
    }

    addEventOnButton( button ) {
        if ( !button ) {
            return
        }

        button.addEventListener( 'click', (e) => {
            this.handleClick(e, button)
        })
    }

    handleClick = (e, button) => {
        e.stopPropagation()
        e.preventDefault()

        if ( this.isOpen ) {
            this.close(e, button)
        } else {
            this.open(e, button)
        }
    }

    open(e, button){
        this.openCb(e)
        this.isOpen = true

        if (this.accessibility) {
            button.setAttribute('aria-expended', true)
        }
    }

    close(e, button){
        this.closeCb(e)
        this.isOpen = false

        if (this.accessibility) {
            button.removeAttribute('aria-expended')
        }
    }

    openCb = (e) => {}
    closeCb = (e) => {}
}

export default ToggleState
