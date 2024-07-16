document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');


            const maxWidth = 80; 
            const aspectRatio = img.width / img.height;
            const maxHeight = Math.floor(maxWidth / aspectRatio); 

            canvas.width = img.width;
            canvas.height = img.height;


            context.drawImage(img, 0, 0);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const asciiArt = convertToAscii(imageData, maxWidth);
            const asciiArtElement = document.getElementById('asciiArt');
            asciiArtElement.textContent = asciiArt;
            const selectedColor = document.getElementById('colorSelect').value;
            asciiArtElement.style.color = selectedColor; 
            asciiArtElement.style.display = 'block'; 
            document.getElementById('resetButton').style.display = 'inline-block';
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('upload').value = ''; 
    document.getElementById('asciiArt').textContent = ''; 
    document.getElementById('asciiArt').style.display = 'none'; 
    this.style.display = 'none'; 
});

function convertToAscii(imageData, maxWidth) {
    const chars = '@%#*+=-:. '; 
    let ascii = '';
    const scale = Math.ceil(imageData.width / maxWidth);

    for (let y = 0; y < imageData.height; y += scale) {
        for (let x = 0; x < imageData.width; x += scale) {
            const index = (y * imageData.width + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];
            const brightness = (r + g + b) / 3;
            const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
            ascii += chars[charIndex];
        }
        ascii += '\n';
    }

    return ascii;
}







