import tmp from "./template.js";

export default class Range extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = tmp.render({type: this.getAttribute("type")});
        this.innerDOM = tmp.getDOM(this.shadowRoot);
        let value = this.getAttribute("val");
        this.changeValue(+value);
        this.addEventListener("mousedown", this.eventHandler);
        this.addEventListener("mouseup", this.eventHandler);
        this.addEventListener("mousemove", this.eventHandler);
    }
    eventHandler(e) {
        let bounds = this.getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let pos = (x / this.offsetWidth) * 100;
        switch (e.type) {
            case "mousedown":
                this.movable = true;
                this.changeValue(pos);
                break;
            case "mouseup":
                this.movable = false;
                break;
            case "mousemove":
                if (this.movable) {
                    this.changeValue(pos);
                }
                break;

        }
    }

    changeValue(v) {
        let thumb = this.innerDOM.thumb;
        console.log(thumb, v)
        if (v <= 0) {
            thumb.style.left = -thumb.offsetWidth / 2 + "px";
        } else if (v >= 100) {
            thumb.style.left = this.offsetWidth - thumb.offsetWidth / 2 + "px";
        } else {
            thumb.style.left = this.offsetWidth / 100 * v - thumb.offsetWidth / 2 + "px";
        }
    }
}
