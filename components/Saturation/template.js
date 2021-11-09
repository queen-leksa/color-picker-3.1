export default {
    render() {
        return `
            ${this.html()}
            ${this.css()}
        `
    },
    html() {
        return `
            <div class="bg-overlay bg-overlay_hor"></div>
            <div class="bg-overlay bg-overlay_ver"></div>
            <div class="thumb"></div>
        `
    },
    css() {
        return `
            <style>
                /*:root {*/
                /*    position: relative;*/
                /*    display: block;*/
                /*}*/
                .bg-overlay {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }
                .bg-overlay_ver {
                    background-image: linear-gradient(to bottom, transparent 0%, #000 100%);
                }
                .bg-overlay_hor {
                    background-image: linear-gradient(to left, transparent 0%, #fff 100%);
                }
                .thumb {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    position: absolute;
                    top: calc(50% - 4px);
                    left: calc(50% - 4px);
                    cursor: pointer;
                }
            
            </style>
        `
    }
}