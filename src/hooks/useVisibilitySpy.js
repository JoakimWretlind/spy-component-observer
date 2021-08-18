import { useState, useRef, useEffect } from 'react';

let OBSERVER = null;
let SUBSCRIBERS = new Map();

// create a range of thresholds
const buildThresholdList = () => {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
};

let options = {
    rootMargin: "30px",
    threshold: buildThresholdList()
}

// when shall a change happen
const THRESHOLD_TRIGGER = 0.75;

// this will get called everytime the threshold gets passed
let callback = (entries) => {
    entries.forEach((entry) => {
        // for each entry, we get hold of the element
        const listener = SUBSCRIBERS.get(entry.target);
        if (listener) {
            const ratio = entry.intersectionRatio;
            // when shall a change happen
            listener(ratio > THRESHOLD_TRIGGER, ratio);
        }
    })
}

const getObserver = () => {
    // if one exists, don't create more observers
    if (OBSERVER) {
        return OBSERVER;
    }

    // create an observer with a callback function (callback)
    OBSERVER = new IntersectionObserver(callback, options);
    return OBSERVER;
};

const useVisibilitySpy = () => {
    const itemRef = useRef(null);
    const [{ isVisible, ratio }, setState] = useState({
        isVisible: false,
        ratio: 0// how visible?
    });

    // get hold of the observer, get the current element
    useEffect(() => {
        const observer = getObserver();
        const element = itemRef.current;

        if (!element) return;
        observer.observe(element);

        // add a subscribers map with a 
        // callback function (visible, ratio)
        SUBSCRIBERS.set(element, (visible, ratio) => {
            //if (visible !== isVisible) {
            setState({ isVisible: visible, ratio: ratio });
            //setIsVisible(visible);
            // }
        });

        // cleanup
        return () => {
            observer.unobserve(element);
        };
    }, [itemRef, isVisible]);

    // everytime an item is added to the hook we call the useEffect
    return { itemRef, isVisible, ratio };
};

export default useVisibilitySpy;
