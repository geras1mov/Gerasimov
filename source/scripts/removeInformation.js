function removeInformation() {
    const information = document.querySelector(".information");

    while (information.firstChild) {
        information.removeChild(information.lastChild)
    }

    information.style.visibility = "hidden";
}