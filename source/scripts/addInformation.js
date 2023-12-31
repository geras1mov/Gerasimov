function addInformation() {
    const information = document.querySelector(".information");
    information.style.visibility = "inherit";

    const text = `Hard skills:<br>
    <div style="text-align: center;"><i class="fa-brands">C#</i>   <i class="fa-brands fa-java"></i>   <i class="fa-brands fa-python"></i>   
    <i class="fa-brands fa-js"></i>   <i class="fa-brands fa-html5"></i>   <i class="fa-brands fa-css3-alt"></i>   <i class="fa-brands fa-react"></i>   
    <i class="fa-brands fa-node-js"></i></div>
    <br>
    Languages: Russian, English
    <br><br>
    You could view my projects in my <a href="https://github.com/geras1mov" target="_blank" style="color: black">GitHub</a>`;

    information.innerHTML = text;
}