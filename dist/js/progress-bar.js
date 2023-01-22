import { Direction } from "./index.js";
const line = document.querySelector(".progress-bar__line");
const POINT_DONE = "#28d928";
const POINT_DONT_DONE = "#e7e5e5";
export const stepHandler = (pointsProgressContainer) => {
    const pointsContainer = document.querySelector(".progress-bar__ul");
    const taskCount = (pointsProgressContainer === null || pointsProgressContainer === void 0 ? void 0 : pointsProgressContainer.childElementCount) || 0;
    const valueByOneStep = 100 / (taskCount - 1);
    let currentStep = 0;
    return (stepDirection) => {
        switch (stepDirection) {
            case Direction.Next: {
                if (currentStep === 0) {
                    setProgressLineWidth(valueByOneStep / 4);
                    fillPoint(pointsContainer, 0);
                    currentStep = 1;
                }
                else if (currentStep < taskCount) {
                    setProgressLineWidth(valueByOneStep);
                    fillPoint(pointsContainer, currentStep++);
                }
                break;
            }
            case Direction.Prev: {
                if (currentStep >= taskCount) {
                    setProgressLineWidth((-valueByOneStep * 3) / 4);
                    clearPoint(pointsContainer, --currentStep);
                    console.log("x");
                }
                else if (currentStep !== 0) {
                    setProgressLineWidth(-valueByOneStep);
                    clearPoint(pointsContainer, --currentStep);
                    console.log("y");
                }
                break;
            }
        }
    };
};
const setProgressLineWidth = (width) => {
    let currentWidth = +line.style.width.replace("%", "");
    let totalWidth = currentWidth + width;
    if (totalWidth > 100) {
        totalWidth = 100;
    }
    if (totalWidth < 0) {
        totalWidth = 0;
    }
    line.style.width = `${totalWidth.toFixed(2)}%`;
};
const fillPoint = (pointsContainer, index) => {
    pointsContainer.children[index].style.backgroundColor = POINT_DONE;
};
const clearPoint = (pointsContainer, index) => {
    pointsContainer.children[index].style.backgroundColor = POINT_DONT_DONE;
};
//# sourceMappingURL=progress-bar.js.map