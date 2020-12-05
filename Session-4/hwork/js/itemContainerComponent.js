const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
<div id="item-container"> 
    <img src="https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg" alt="hihi">
    <div id="price">10</div>
    <div id = "description">Lorem....... </div>
    <div id = "address"> Hà Nội </div>
</div>
`;

export default class ItemContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
    // định nghĩa thuộc tính ảnh hưởng tới nội dung
    static get observedAttributes() {
        return ["image","price",'description','address']
    }
    // được chạy khi giá trị thuộc tính thay đổi
    attributeChangedCallback(attrnName, oldValue,newValue) {
        console.log(attrName + "=" + newValue);
        switch(attrName) {
            case 'image' :
                this.shadowRoot.getElementById('image').src =newValue
            break;
            
            case 'price' :
                 this.shadowRoot.getElementById('price').innerHTML = newValue 
            break;

        }
    }
}
window.customElements.define('item-container', ItemContainer) ;