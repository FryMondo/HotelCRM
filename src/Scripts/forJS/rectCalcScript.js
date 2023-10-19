function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (length >= width && length > 0 && width > 0) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

        document.getElementById("perimeter").textContent = perimeter.toFixed(2);
        document.getElementById("area").textContent = area.toFixed(2);
        document.getElementById("diagonal").textContent = diagonal.toFixed(2);
    }
}

document.getElementById("length").addEventListener("input", calculateRectangle);
document.getElementById("width").addEventListener("input", calculateRectangle);

calculateRectangle();