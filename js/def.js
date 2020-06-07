var hamburger, navigation;

document.addEventListener("DOMContentLoaded", function(){
    init();
});

window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v7.0'
    });
  };

  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function init(){
    hamburger = document.getElementById("hamburger");
    navigation = document.getElementById("nav");
}

function openNav(){
    // clearClasses("hamburger_close");
    hamburger.classList.add("animated", "rotateOutUpLeft");
    navigation.style.visibility = "visible";
    navigation.style.width = "15%";
    navigation.classList.add("animated","slideInRight");

    setTimeout(function () {
        hamburger.classList.remove("animated", "rotateOutUpLeft");
        navigation.classList.remove("animated", "slideInRight");
        navigation.classList.remove("animated", "slideInRight");
    },500);

}

function clearClasses(object){

    if(object == "hamburger_open")
        hamburger.classList.remove("animated", "rotateOutUpLeft");
    if(object == "hamburger_close")
        hamburger.classList.remove("animated", "rotateInUpRight"); 
}

function closeNav() {
    // clearClasses("hamburger_open");
    navigation.classList.add("animated","slideOutRight");
    hamburger.classList.add("animated", "rotateInUpRight");

    // navigation.style.visibility = "visible";
    // navigation.style.width = "0%";

    setTimeout(function () {
        hamburger.classList.remove("animated", "rotateInUpRight");
        navigation.classList.remove("animated", "slideOutRight");
        navigation.style.visibility = "hidden";
        navigation.style.width = "0%";
    },500);

    // hb.classList.remove
}