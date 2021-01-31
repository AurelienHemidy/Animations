import { landingPageAnimations } from './Animations';
import { TimelineSequence, AnimationWAP, animationWaveText } from './Timeline'
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

//Pour faire passer quelque chose avec un voile, il suffit que le parent soit en overflow hidden, dans ce cas, 
//l'enfant qui est en dehors de son cadre sera invisible


// setTimeout(() => {
//     AnimText();
// }, 3500);  

var textWrapper = document.querySelector('.letters');
textWrapper!.innerHTML = textWrapper!.textContent!.replace(/([^\x00-\x80]|\w|\')/g, "<span class='letter'>$&</span>");
const letterArray = document.querySelectorAll(".letter");

setTimeout(() => {
    animationWaveText(
        letterArray, 
        [
            { transform: 'translate(.55em, 1.1em) rotate(180deg)' },
            { transform: 'translate(0, 0) rotate(0deg)'},
        ], 
        {
            duration: 750,
            iterations: 1,
            fill: 'forwards',
            easing: 'cubic-bezier(.48,.73,.38,1)',
        },
        40
    )
}, 2750);

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
