export default class Accordion {

    constructor(accordion) {
        this.addPrototype()
        this.accordionClass = accordion
        this.accordionContentClass = `${this.accordionClass}__content`
        this.accordionActiveClass = `${this.accordionClass}--active`
        this.maxHeight = this.heightCalculation() + 'px'

        this.deleteToIndex()
        let button = this.accordionClass.querySelector('button')
        button.addEventListener('click', this.onClick.bind(this))
    }

    deleteToIndex = () => {
        let section = this.accordionClass.querySelector(this.accordionContentClass)
        if (section) {
            let selectables = section.querySelectorAll('a[href], area[href], input:not([disabled]),' +
                ' select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]')
            selectables.forEach((elem) => {
                elem.setAttribute('tabindex', '-1')
            })
        }
    }
    addToIndex = () => {

        let section = this.accordionClass.querySelector(this.accordionContentClass)
        if (section) {
            let selectables = section.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]')
            selectables.forEach((elem) => {
                elem.removeAttribute('tabindex')
            })
        }
    }
    onClick = () => {
        let divContent = this.accordionClass.querySelector(this.accordionContentClass)
        if (divContent) {
            if (this.accordionClass.classList.contains(this.accordionActiveClass)) {
                divContent.style.maxHeight = ''
                this.deleteToIndex()
            } else {
                this.resetAllHeight()
                this.addToIndex()
                divContent.style.maxHeight = this.maxHeight
            }
            this.accordionClass.classList.toggle(this.accordionActiveClass)
        }
    }
    resetAllHeight = () => {
        let accordions = document.querySelectorAll(this.accordionClass)
        accordions.forEach( (accordion) => {
            if (accordion.classList.contains(this.accordionActiveClass)) {
                accordion.classList.toggle(this.accordionActiveClass)
            }

            let contentDiv = accordion.querySelector(this.accordionContentClass)
            if (contentDiv) {
                contentDiv.style.maxHeight = ''
            }
        })
    }
    heightCalculation = () => {
        let contentDiv = this.accordionClass.querySelector(this.accordionContentClass)
        let height = 0

        if (contentDiv != null) {
            let children = contentDiv.children
            for (var i = 0; i < children.length; i++) {
                let child = children[i]

                height += window.getComputedStyle(child).marginBottom.toNumber()
                height += window.getComputedStyle(child).marginTop.toNumber()
                height += window.getComputedStyle(child).height.toNumber()
            }
        }

        return height
    }
    addPrototype = () => {
        String.prototype.toNumber = function () {
            return parseInt(this.replace('px', '').replace('%', ''))
        }
    }
}
