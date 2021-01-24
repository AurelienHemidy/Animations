import { landingPageAnimations } from './Animations';
import { TimelineSequence, AnimationWAP } from './Timeline'
import './css/main.scss';
 

const mapContainer = document.querySelector(".map-container");

console.log(landingPageAnimations);

TimelineSequence(landingPageAnimations);

const stocismText = document.querySelector(".stocism-text");
const stocismLetter = document.querySelectorAll(".stocism-letter");
const stocismLetterArray = Array.from(document.querySelectorAll(".stocism-letter"));
const stoicismReverseArray = stocismLetterArray.reverse();

//Animation fade In par la droite, lettre par lettre
const AnimText = () => {
    var timeline = 0;
    for(let i=0; i < stoicismReverseArray.length; i++) {
        timeline = 100 + timeline;
        setTimeout(() => {
            stoicismReverseArray[i].firstElementChild?.classList.add("anim-letter");
        }, timeline);
    }
}


setTimeout(() => {
    AnimText();
}, 3500);  

//Animation fade in par le bas 
const NextAnimText = () =>  {
    var timeline = 0;
    for(let i=0; i < stocismLetterArray.length; i++) {
        timeline = 100 + timeline;
        setTimeout(() => {
            stocismLetterArray[i].firstElementChild?.classList.add("anim-letterAppear");
        }, timeline);
    }
};

setTimeout(() => {
    // NextAnimText();
}, 3500);
