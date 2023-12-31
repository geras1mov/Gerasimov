window.addEventListener("DOMContentLoaded", function() {
    addThumbnail();
    addInformation();
})

window.addEventListener("resize", function() {
    resizeThumbnail();

    let clientWidth = document.documentElement.clientWidth;

    if (clientWidth < 768) {
        removeInformation();
    } else {
        addInformation();
    }
})