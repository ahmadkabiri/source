
const template = document.createElement("template") ;

template.innerHTML = `
<link href="components/site-user/site-user.css" rel="stylesheet" />
    <slot name="username"></slot>
    <slot name="job"></slot>
    <button>Remove</button>
    <hr/>
`

// چرا تمپلیت؟ چون که تنها محتویات تمپلیت به دام اضافه می‌شوند و خودش اضافه نمیشود:
// به عبارتی تمپلیت یک تگ فرضی است


class SiteUser extends HTMLElement {

    constructor () {
        super()

        console.log("المنت کاستوم س اخته سد ", this)

        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallbanck () {
         // Codes - Event Handling
         console.log(this.shadowRoot.querySelector("button"))
    }
}

// Shadow DOM 

export {SiteUser}
