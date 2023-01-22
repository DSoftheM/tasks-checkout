// import { parseTranslateValue } from "../task-list.js";

// export const resizeHandler = (elementToCorrent: HTMLElement, currentStep: number) => {
//     let prevWidth = window.visualViewport.width;
//     return () => {
//         if (currentStep > 0) {
//             const currentWidth = window.visualViewport.width;
//             const offset = prevWidth - currentWidth;
//             prevWidth = currentWidth;
//             const currentTranslateValue = parseTranslateValue(elementToCorrent.style.transform);
//             elementToCorrent.style.transform = `translateX(${currentTranslateValue + offset}px)`;
//         } else {
//             console.log("currentStep", currentStep);
//         }
//     };
// };
