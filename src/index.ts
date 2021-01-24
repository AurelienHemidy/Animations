import './css/main.scss';

const mapContainer = document.querySelector(".map-container");

  var mapContainerKeyframes = new KeyframeEffect(
    mapContainer,
    [
      { transform: 'Scale(1, 1)' },
      { transform: 'Scale(0.9, 1)' },
      { transform: 'Scale(.9, .9'},
      { transform: 'Scale(.2, .7'}
    ], {
        duration: 1700,
        iterations: 1,
        fill: 'forwards',
        easing: 'cubic-bezier(.48,.73,.38,1)',
    }
  );
  
  // Set up the rabbit's animation to play on command by calling rabbitDownAnimation.play() later
  var mapStartingAnimation = new Animation(mapContainerKeyframes, document.timeline);

  var mapContainerKeyframes2 = new KeyframeEffect(
    mapContainer,
    [
      { transform: 'Scale(.2, .7) rotate(0deg)' },
      { transform: 'rotate(45deg)', opacity: 0 },
    ], {
        duration: 1700,
        iterations: 1,
        fill: 'forwards',
        easing: 'cubic-bezier(.48,.73,.38,1)',
    }
  );
  
  // Set up the rabbit's animation to play on command by calling rabbitDownAnimation.play() later
  var mapStartingAnimation2 = new Animation(mapContainerKeyframes2, document.timeline);


  mapContainer?.addEventListener("transitionend", () => {
    console.log("Fin de l'animation");
  });

type AnimationWAP = {
    time: number,
    step: Animation,
}

var animations: AnimationWAP[] = [
    {
        // Activate the second step, circle #2
        time:2000,
        step: mapStartingAnimation,
    },
    {
        // Activate the third step
        time:2500,
        step: mapStartingAnimation2,
    }
];

function runAnimation(i: number, timeline: number){
    setTimeout(function(){
        animations[i].step.play();
    }, timeline);
}

function animationTimeline(){
    var timeline = 0;

    for(var i:number=0; i<animations.length; i++){
        // for each step in the animation array
        // update timeline to be value of animations[i].time PLUS previous timeline value
        timeline = animations[i].time + timeline;
        runAnimation(i, timeline);
    }
}

animationTimeline();

const stocismText = document.querySelector(".stocism-text");
const stocismLetter = document.querySelectorAll(".stocism-letter");
const stocismLetterArray = Array.from(document.querySelectorAll(".stocism-letter"));
const stoicismReverseArray = stocismLetterArray.reverse();

const AnimText = () => {
    var timeline = 0;
    for(let i=0; i < stoicismReverseArray.length; i++) {
        timeline = 100 + timeline;
        setTimeout(() => {
            stoicismReverseArray[i].firstElementChild?.classList.add("anim-letter");
        }, timeline);
    }
}


// setTimeout(() => {
//     AnimText();
// }, 3500);  

const NextAnimText = () =>  {
    // stocismText?.classList.add("")
};

setTimeout(() => {
    NextAnimText();
}, 3500);
