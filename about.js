var collapse = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var aboutContent = this.nextElementSibling;
        if (aboutContent.style.display === "flex") {
            aboutContent.style.display = "none";
        } else {
            aboutContent.style.display = "flex";
        }
        }
    )
}
