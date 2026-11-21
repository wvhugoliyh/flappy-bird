export const gameview = {
    canvas: document.getElementById("gameview"),
    ctx: canvas.getContext("2d"),

    resize() {
        canvas.style.scale = Math.min(window.width / 128, window.height / 72);
    }
    
    draw(x, y, image) {
        ctx.drawImage(image, x, y);
    }
}