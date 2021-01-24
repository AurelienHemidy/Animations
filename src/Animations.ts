import { AnimationWAP } from "./Timeline";

const mapContainer = document.querySelector(".map-container");

export const landingPageAnimations: AnimationWAP[] = [
    {
        time: 2000,
        step: new Animation(new KeyframeEffect(
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
          ), document.timeline)
    },
    {
        time: 2500,
        step: new Animation(new KeyframeEffect(
            mapContainer,
            [
                { transform: 'Scale(.2, .7) rotate(0deg)' },
                { transform: 'rotate(45deg)', opacity: 0 },
            ], 
            {
                duration: 1700,
                iterations: 1,
                fill: 'forwards',
                easing: 'cubic-bezier(.48,.73,.38,1)',
            }
          ), document.timeline)
    }
]