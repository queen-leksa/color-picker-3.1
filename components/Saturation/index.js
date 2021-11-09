import tmp from "./template.js";

export default class SaturationSquare extends HTMLElement {
    get bg() {
        return this.getAttribute("bg");
    }
    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = tmp.render();
        this.style.backgroundColor = this.bg;
    }
}