export type AnimationWAP = {
    time: number,
    step: Animation,
}

//Timeline prenant un tableau d'animations et un delay entre chaque animation afin de les faire s'enchainer
export const TimelineSequence = (animationSequence: AnimationWAP[]) => {
    var delay = 0;

    for(var i:number=0; i < animationSequence.length; i++){
        delay = animationSequence[i].time + delay;
        runAnimation(i, delay, animationSequence);
    }
}


function runAnimation(i: number, delay: number, animationSequence: AnimationWAP[]){
    setTimeout(function(){
        animationSequence[i].step.play();
    }, delay);
}


//Timeline pour array avec éléments ayant la même classe auquel on ajoute la même animation avec un delay enter chaque animation
export const animationWaveText = (ArraySequence: NodeListOf<Element>, animationSequence: {}[], transitionSequence: {}, delayAnimation: number) => {
    let delayAnimationNumber = 0;
    ArraySequence.forEach(text => {
        let anim = new Animation(new KeyframeEffect(
            text,
            animationSequence, 
            transitionSequence
          ), document.timeline);;
          setTimeout(() => {
              anim.play();
          }, delayAnimationNumber);
          delayAnimationNumber += delayAnimation;
    });
}