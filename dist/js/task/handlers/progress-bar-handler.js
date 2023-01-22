import { setProgressLineWidth, fillPoint, clearPoint } from "../progress-bar.js";
import { Direction } from "../task-list.js";
export const stepProgressHandler = (pointsContainer, line) => {
    const taskCount = (pointsContainer === null || pointsContainer === void 0 ? void 0 : pointsContainer.childElementCount) || 0;
    const valueByOneStep = 100 / (taskCount - 1);
    let currentStep = 0;
    return (stepDirection) => {
        switch (stepDirection) {
            case Direction.Next: {
                if (currentStep === 0) {
                    setProgressLineWidth(valueByOneStep / 4, line);
                    fillPoint(pointsContainer, 0);
                    currentStep = 1;
                }
                else if (currentStep < taskCount) {
                    setProgressLineWidth(valueByOneStep, line);
                    fillPoint(pointsContainer, currentStep++);
                }
                break;
            }
            case Direction.Prev: {
                if (currentStep >= taskCount) {
                    setProgressLineWidth((-valueByOneStep * 3) / 4, line);
                    clearPoint(pointsContainer, --currentStep);
                }
                else if (currentStep !== 0) {
                    setProgressLineWidth(-valueByOneStep, line);
                    clearPoint(pointsContainer, --currentStep);
                }
                break;
            }
        }
    };
};
//# sourceMappingURL=progress-bar-handler.js.map