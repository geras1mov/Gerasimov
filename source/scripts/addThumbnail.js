function addThumbnail() {
    const thumbnail = document.querySelector(".thumbnail");
    const thumbnailStyle = getComputedStyle(thumbnail, "");
    let image = document.createElement("img");
    let path = new Images().thumbnail;

    try {
        image.src = path;
        image.width = parseInt(thumbnailStyle.width);
        image.height = image.width;
        image.id = "thumbnail-image";
        image.style.borderRadius = thumbnailStyle.borderRadius;
        
        thumbnail.appendChild(image);
    } catch (error) {
        return error;
    }
}