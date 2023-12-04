languages = [
    ["Python", "icons/python.png", "https://www.python.org/"], ["C", "icons/c.png", "https://devdocs.io/c/"], ["C#", "icons/csharp.png", "https://learn.microsoft.com/ru-ru/dotnet/csharp/"], ["C++", "icons/c++.png", "https://learn.microsoft.com/ru-ru/cpp/cpp/?view=msvc-170"], ["GO", "icons/go.png", "https://go.dev/doc/"], ["Java", "icons/java.png", "https://docs.oracle.com/en/java/"], ["Java Script", "icons/js.png", "https://262.ecma-international.org/"], ["Kotlin", "icons/kotlin.png", "https://kotlinlang.org/docs/getting-started.html"], ["Lua", "icons/lua.png", "https://www.lua.org/docs.html"], ["Pascal", "icons/pascal.jpg", "https://www.freepascal.org/docs.html"], ["Perl", "icons/perl.png", "https://perldoc.perl.org/"], ["PHP", "icons/php.png", "https://www.php.net/docs.php"], ["Ruby", "icons/ruby.png", "https://ruby-doc.org/"], ["Rust", "icons/rust.png", "https://doc.rust-lang.org/book/"], ["Scratch", "icons/scratch.png", "https://scratch.oneoffcoder.com/"]
]

randomImage = document.querySelector(".random-img");
randomHeading = document.querySelector(".random-h2");
randomLink = document.querySelector(".random-link");

let randomNum;
const randomBlock = document.querySelector(".random-block");
const randomBtn = document.querySelector(".random-btn");
usedNums = [];

randomBtn.addEventListener("click", function(e) {

    e.preventDefault();
    randomLink.classList.remove("random-link-off");
    randomBlock.value = "";
    randomNum = Math.floor(Math.random() * languages.length);

    if (usedNums.length === languages.length) {
        usedNums = [];
    }

    while (usedNums.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * languages.length);
    }

    usedNums.push(randomNum);

    randomImage.style.transform = "translateX(0px)";
    randomLink.href = languages[randomNum][2];
    randomImage.src = languages[randomNum][1];
    randomHeading.textContent = languages[randomNum][0];
})