function open_blog_page(IsLandingPage) {
    window.open((IsLandingPage == 1 ? "." : "..").concat("/pages/", document.getElementById("cities").value, ".html"), "_self")
}
