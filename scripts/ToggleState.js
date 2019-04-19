class ToggleState {
    constructor( btnSelector ) {
        this.isOpen = false
        this.btns = document.querySelectorAll( btnSelector )


        window.addEventListener('click', (e) => {
            console.log()
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

        button.addEventListener( 'click', this.handleClick)
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
        this.openCb(e)
        this.isOpen = true
    }

    close(e){
        this.closeCb(e)
        this.isOpen = false
    }

    openCb = (e) => {}
    closeCb = (e) => {}
}

export {ToggleState}
