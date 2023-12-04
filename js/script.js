const headerLinks = document.querySelectorAll(".header_li");
const headerUl = document.querySelector(".header_ul");

headerUl.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("header_li")) {
        hoverLink = e.target;
        headerLinks.forEach((link) => link.classList.add("header_li_nohover"))
        hoverLink.classList.remove("header_li_nohover")
        hoverLink.classList.add("header_li_hover")
    }  
})

headerUl.addEventListener("mouseout", function(e) {
    if (e.target.classList.contains("header_li")) {
        headerLinks.forEach((link) => {
            link.classList.remove("header_li_hover")
            link.classList.remove("header_li_nohover")
        })
    }
})