const $template = document.createElement("template");
$template.innerHTML = /*html*/ ` 
<ul id="side-menu">
    <li> <a href="./index.html">Index</a> </li>
    <li> <a href="./about.html">About</a> </li>
    <li> <a href="./contact-us.html">Contact</a> </li>
    <li> <a href="./contact-us.html">Help me</a> </li>
    <li> <a href="./contact-us.html">Our forum</a> </li>
    <li> <a href="./contact-us.html">Blogs</a> </li>
    <li> <a href="./contact-us.html">Account</a> </li>
    <li> <a href="./contact-us.html">Template</a> </li>

</ul>
`

export default class SideMenu extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
        }
}

window.customElements.define('side-menu', SideMenu) ;