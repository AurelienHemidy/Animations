import { AnimationWAP } from "./Timeline";

const mapContainer = document.querySelector(".map-container");
const after = document.querySelector(".after");
const letters = document.querySelector(".letters");

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
                { transform: 'Scale(.2, .7)' },
                { transform: 'Scale(1, .7)'},
            ], 
            {
                duration: 1000,
                iterations: 1,
                fill: 'forwards',
                easing: 'cubic-bezier(.24,.63,.12,1)',
            },
        ), document.timeline)
    },
    {
        time: 1000,
        step: new Animation(new KeyframeEffect(
            mapContainer,
            [
                { transform: 'Scale(1, .7)' },
                { transform: 'Scale(1)' },
            ], 
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards',
                easing: 'cubic-bezier(.24,.63,.12,1)',
            }
          ), document.timeline)
    },
    {
        time: 750,
        step: new Animation(new KeyframeEffect(
            after,
            [
                { transform: 'ScaleX(1)' },
            ], 
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards',
                easing: 'cubic-bezier(.24,.63,.12,1)',
            }
          ), document.timeline)
    },
    {
        time: 1000,
        step: new Animation(new KeyframeEffect(
            letters,
            [
                { transform: 'translate(0, 0)' },
                { transform: 'translate(0, 1.1em)', opacity: 0.5 },
            ], 
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards',
                easing: 'cubic-bezier(.24,.63,.12,1)',
            }
          ), document.timeline)
    },
    {
        time: 0,
        step: new Animation(new KeyframeEffect(
            after,
            [
                { transform: 'translate(0, 0)' },
                { transform: 'translate(0, 1.5em)', opacity: 0.5 },
            ], 
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards',
                easing: 'cubic-bezier(.24,.63,.12,1)',
            }
          ), document.timeline)
    }
]