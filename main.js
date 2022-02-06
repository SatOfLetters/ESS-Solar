const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

const headerAnchor = document.querySelector('.logo_a')
const headerContent = document.querySelector('.header_content')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = '#aaaaaa';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--c1)';
        }
    }
}

hambt.addEventListener('click', toggleNav)

document.body.onscroll = function() {
    if(showingNav == true) {
        toggleNav()
    } 
    
    if(window.pageYOffset > 10) {
        headerAnchor.classList.add('logo_shrink')
        headerContent.classList.add('header_shrink')
    } else {
        headerAnchor.classList.remove('logo_shrink')
        headerContent.classList.remove('header_shrink')
    }
}








// COLLAPSIBLE

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}