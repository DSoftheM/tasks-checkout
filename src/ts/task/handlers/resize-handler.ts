import { parseTranslateValue } from "../task-list.js";

export const resizeHandler = (element: HTMLElement) => {
    let prevWidth = window.visualViewport.width;
    return (currentStep: number) => {
        if (currentStep > 0) {
            const currentWidth = window.visualViewport.width;
            const offset = prevWidth - currentWidth;
            prevWidth = currentWidth;
            const currentTranslateValue = parseTranslateValue(element.style.transform);
            element.style.transform = `translateX(${currentTranslateValue + offset}px)`;
        }
    };
};
