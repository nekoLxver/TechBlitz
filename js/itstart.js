alertBtn = document.querySelector(".btn-itstart-alert");
alertBlock = document.querySelector(".alert-itstart-alert");
fixedNav = document.querySelector(".list-group");
fixedNavItems = document.querySelectorAll(".list-group-item");
sources = document.querySelectorAll(".text-center");

alertBtn.addEventListener("click", function(e) {
    alertBlock.style.opacity = 0;
    alertBlock.style.pointerEvents = "none";
})

fixedNav.addEventListener("click", function(e) {
    if (e.target.classList.contains("list-group-item")) {
        fixedNavItems.forEach((item) => item.classList.remove("active"));
        currNavItem = e.target;
        currNavItem.classList.add("active");
        sectionToScroll = document.getElementsByClassName(currNavItem.id)
        sectionToScroll[0].scrollIntoView({behavior: "smooth"})
    }
})

let options = {
    root: null,
    threshold: 0.1,
};

let observer = new IntersectionObserver(function(entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        return;
    }
    entry.target.classList.add("text-center-visible");
    observer.unobserve(entry.target);
}, options);

sources.forEach(function(source) {
    observer.observe(source);
})