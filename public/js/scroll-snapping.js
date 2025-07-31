import { easeQuadInOut } from 'https://cdn.jsdelivr.net/npm/d3-ease@3/+esm';

const sections = document.querySelectorAll('.scroll-section');

let currentSection = 0;
let isScrolling = false;

function scrollToSectionEaseInOut(section, duration)
{
    console.log("Is Scrolling");
    isScrolling = true;
    section.scrollIntoView({behavior:"smooth", block:"center"});

    setTimeout(() => {
        console.log("Scroll Finished");
        isScrolling = false;
    }, duration);
}


window.addEventListener('wheel', (e => {

    if (isScrolling) return;

    if (e.deltaY > 0 && currentSection < sections.length - 1)
    {
        currentSection++;
    }
    else if (e.deltaY < 0 && currentSection > 0) 
    {
        currentSection--;
    }

    scrollToSectionEaseInOut(sections[currentSection], 1000);

}), {passive: false});