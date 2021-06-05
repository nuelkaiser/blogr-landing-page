const toggler = document.querySelector(".ham-svg-1");
const togglerMenu = document.querySelector(".toogle");
const hover = document.querySelector(".qch");
const whatToShow = document.querySelector(".hover-effect");
const arrowSvg = document.querySelector(".yolo");
const innerWork = document.querySelector(".diff-last")
const arrowSvg2 = document.querySelector(".yolo-2")
const innerShowcase = document.querySelector(".inner-showcase")

toggler.addEventListener( "click", toggle );
hover.addEventListener( "mouseover", show );
whatToShow.addEventListener( "mouseleave", hide );
innerWork.addEventListener( "click",  click );

function toggle() {
    toggler.classList.toggle("open-toggle");
    togglerMenu.classList.toggle("open");

    togglerMenu.contains('open') ? togglerMenu.classList.toggle('remove') : togglerMenu.toggle('')

}

function show() {
    whatToShow.style.display = 'block';
    arrowSvg.style.transform = 'rotate(180deg)';
}

function hide () {
    whatToShow.style.display = 'none';
    arrowSvg.style.transform = 'none'
}

function click () {
    arrowSvg2.classList.toggle('change');
    innerShowcase.classList.toggle('second-change')

}
