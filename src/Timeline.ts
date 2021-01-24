export type AnimationWAP = {
    time: number,
    step: Animation,
}

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