import roverSVG from './svg/rover.svg';
import './scss/main.scss';
import gsap from 'gsap';

const svg = document.querySelector("svg#main");
svg.innerHTML = roverSVG;
const tl = gsap.timeline();

tl.set("#front-door-panel-1,#front-door-panel-3,#front-door-panel-5,#front-door-panel-7,#front-door-panel-9,#back-door-panel-2,#back-door-panel-4,#back-door-panel-5,#back-wheel,#front-wheel,#back-door,#back-door-window-panel-1,#back-door-window-panel-2,#back-door-window-panel-3,#back-door-window-panel-4,#front-door,#front-door-window-panel-1,#front-door-window-panel-2,#front-door-window-panel-3,#front-door-window-panel-4,#front-door-window-panel-5,#back,#back-frame-1,#back-frame-2,#back-window-frame-1,#back-window-frame-2,#back-window-frame-3,#back-window-frame-4,#back-light-1,#back-light-2,#back-light-3,#back-light-4,#back-light-5,#back-light-6,#back-light-7,#bumper-light,#front,#front-light-1,#front-light-2,#front-light-3,#front-panel-1,#front-panel-2,#front-panel-3,#front-panel-4,#front-windshield,#mirror,#back-lip,#back-lip-panel-1,#back-lip-panel-2,#back-windshield,#top,#wiper", {
    opacity: 0
}).set("#front-wheel, #back-wheel", {
    y: "90vw"
}).to("#front-wheel, #back-wheel", {
    opacity: 1,
    y: 0,
    rotation: 180,
    transformOrigin: "center",
    duration: 1.5,
    stagger: 0.3,
    delay: 0.5
}).to("#mask-1", {
    x: 3000,
    transformOrigin: "0 0",
    duration: 1.5,
    ease: "Power1.easeOut"
}).set("#mask-1", {
    opacity: 0
}).add("start1").to("#mask-2, #mask-3", {
    y: -700,
    duration: 1.5,
    ease: "Power1.easeOut",
    delay: (el) => { return el == 0 ? 0.2 : 0 }
}, "start1").set("#mask-2, #mask-3", {
    opacity: 0
}).to("#mask-4, #mask-5", {
    x: (el) => { return el == 0 ? 800 : -800 },
    duration: 1.5,
    ease: "Power1.easeOut",
    stagger: 0.2
}, "start1").set("#mask-4, #mask-5", {
    opacity: 0
}).set("#back-lip-panel-1, #back-lip-panel-2, #top", {
    y: -1000
}).set("#front-windshield, #front-door-window-panel-1, #front-door-window-panel-2, #front-door-window-panel-3, #front-door-window-panel-4,#front-door-window-panel-5,#back-door-window-panel-1,#back-door-window-panel-2,#back-door-window-panel-3,#back-door-window-panel-4,#back-frame-1,#back-frame-2,#back-windshield,#back-window-frame-2,#back-window-frame-1,#back-window-frame-3,#back-window-frame-4", {
    y: -500
}).add("start2").to("#front-windshield, #front-door-window-panel-1, #front-door-window-panel-2, #front-door-window-panel-3, #front-door-window-panel-4,#front-door-window-panel-5,#back-door-window-panel-1,#back-door-window-panel-2,#back-door-window-panel-3,#back-door-window-panel-4,#back-frame-1,#back-frame-2,#back-windshield,#back-window-frame-2,#back-window-frame-1,#back-window-frame-3,#back-window-frame-4", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "Power1.easeOut"
}, "start2").to("#back-lip-panel-1, #back-lip-panel-2, #top", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "Power1.easeOut"
}, "start2").set("#mirror, #front-panel-1, #front-panel-2, #front-panel-3, #front-panel-4, #front-door-panel-7, #front-door-panel-5, #front-door-panel-3, #front-door-panel-1, #back-panel-2, #back-door-panel-2, #back-door-panel-4, #back-door-panel-5", {
    scale: 2
}).to("#mirror, #front-panel-1, #front-panel-2, #front-panel-3, #front-panel-4, #front-door-panel-7, #front-door-panel-5, #front-door-panel-3, #front-door-panel-1, #back-panel-2, #back-door-panel-2, #back-door-panel-4, #back-door-panel-5", {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: "Power1.easeOut"
}).set("#front-light-1, #front-light-2, #front-light-3", {
    x: -300
}).to("#front-light-1, #front-light-2, #front-light-3", {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "Power1.easeOut"
}).set("#bumper-light,#back-light-1, #back-light-2, #back-light-3, #back-light-4, #back-light-5, #back-light-6, #back-light-7", {
    x: 300
}).to("#bumper-light,#back-light-1, #back-light-2, #back-light-3, #back-light-4, #back-light-5, #back-light-6, #back-light-7", {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "Power1.easeOut"
}).add("start3").to("#wiper", {
    opacity: 1,
    duration: 1.5
}, "start3")