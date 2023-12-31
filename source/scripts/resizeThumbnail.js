function resizeThumbnail() {
    const thumbnail = document.querySelector(".thumbnail");
    const thumbnailStyle = getComputedStyle(thumbnail, "");
    let image = document.querySelector("#thumbnail-image");

    try {
        image.width = parseInt(thumbnailStyle.width);
        image.height = image.width;
    } catch (err) {
        return err;
    }
}