export default {
    render(pr) {
        return `
            ${this.html(pr)}
            ${this.css(pr)}            
        `
    },
    getDOM(self) {
        return {
            thumb: self.querySelector(".thumb")
        }
    },
    html(pr) {
        return `
            <div class="thumbnail"><div>
            <div class="thumb"><div>
        `
    },
    css(pr) {
        return `
            <style>
                :host {
                    display: block;
                    position: relative;
                }
                .thumbnail {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-image: ${pr.type === "hue" ? 
                                        `linear-gradient(to right, 
                                                         red 0%, 
                                                         yellow 17%, 
                                                         lime 33%, 
                                                         cyan 50%, 
                                                         blue 66%, 
                                                         magenta 83%, 
                                                         red 100%)` :
                                        `linear-gradient(45deg, #ccc 25%, transparent 25%),
                                         linear-gradient(-45deg, #ccc 25%, transparent 25%),
                                         linear-gradient(45deg, transparent 75%, #ccc 75%),
                                         linear-gradient(-45deg, transparent 75%, #ccc 75%)`};
                    background-size: ${pr.type === "transparent" ? "20px 20px" : "cover"};
                    background-position: ${pr.type === "transparent" ? 
                                           `0 0, 0 10px, 10px -10px, -10px 0` : 
                                           "center"};
                }
                .thumb {
                    width: 8px;
                    height: 100%;
                    border: 2px solid #fff;
                    border-radius: 4px;
                    box-sizing: border-box;
                    display: block;
                    position: absolute;
                    top: 0;
                    cursor: pointer;
                }
            </style>
        `
    }
}