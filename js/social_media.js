const CONST_HEIGHT = 25
const CONST_WITH = 25

let social_media_db = [
    {
        src:"/img/icon_Instagram.jpg",
        href: "https://www.instagram.com/kaviajandopelomundo/"
    },
    {
        src:"/img/icon_Facebook.jpg",
        href: "https://www.facebook.com/"
    },
    {
        src:"/img/icon_x.jpg",
        href: "https://x.com"
    },
    {
        src:"/img/icon_tiktok.jpg",
        href: "https://www.tiktok.com"
    },
    {
        src:"/img/icon_Youtube.jpg",
        href: "https://www.youtube.com/@kaviajandopelomundo"
    }
]

function createSocialMediaElement(IsLandingPage) {
    social_media_db.forEach(sm => {
        let img_element = document.createElement("img")
        img_element.src = (IsLandingPage == 1 ? "." : "..").concat(sm.src)
        img_element.height = CONST_HEIGHT
        img_element.width = CONST_WITH
        
        let link_element = document.createElement("a")
        link_element.href = sm.href
        link_element.target = "_blank"
        link_element.appendChild(img_element)
            
        document.getElementById("social_media").appendChild(link_element)
    });
}