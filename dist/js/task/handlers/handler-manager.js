import { setProgressLineWidth, fillPoint, clearPoint } from "../progress-bar.js";
import { Direction, moveContainerBackward, moveContainerForward, parseTranslateValue } from "../task-list.js";
export class Tasks {
    constructor(taskCount, pointsContainer, line, overflowContainer, elementToCorrent) {
        this.taskCount = taskCount;
        this.pointsContainer = pointsContainer;
        this.line = line;
        this.overflowContainer = overflowContainer;
        this.elementToCorrent = elementToCorrent;
        this.currentStep = 0;
        this.prevWidth = window.visualViewport.width;
        window.addEventListener("resize", () => this.rezise());
    }
    stepHandler(stepDirection) {
        switch (stepDirection) {
            case Direction.Next:
                if (this.currentStep < this.taskCount) {
                    this.moveProgress(Direction.Next);
                    this.moveContainer(Direction.Next);
                    this.currentStep++;
                }
                break;
            case Direction.Prev:
                if (this.currentStep > 0) {
                    this.moveProgress(Direction.Prev);
                    this.moveContainer(Direction.Prev);
                    this.currentStep--;
                }
                break;
            default:
                break;
        }
    }
    rezise() {
        // todo: если на 1 ресайзить
        if (this.currentStep > 0) {
            const currentWidth = window.visualViewport.width;
            const offset = this.prevWidth - currentWidth;
            this.prevWidth = currentWidth;
            const currentTranslateValue = parseTranslateValue(this.elementToCorrent.style.transform);
            this.elementToCorrent.style.transform = `translateX(${currentTranslateValue + offset}px)`;
        }
    }
    moveProgress(direction) {
        const taskCount = this.pointsContainer.childElementCount || 0;
        const valueByOneStep = 100 / (taskCount - 1);
        switch (direction) {
            case Direction.Next: {
                if (this.currentStep === 0) {
                    setProgressLineWidth(valueByOneStep / 4, this.line);
                    fillPoint(this.pointsContainer, 0);
                }
                else {
                    setProgressLineWidth(valueByOneStep, this.line);
                    fillPoint(this.pointsContainer, this.currentStep);
                }
                break;
            }
            case Direction.Prev: {
                if (this.currentStep >= taskCount) {
                    setProgressLineWidth((-valueByOneStep * 3) / 4, this.line);
                    clearPoint(this.pointsContainer, this.currentStep - 1);
                }
                else {
                    setProgressLineWidth(-valueByOneStep, this.line);
                    clearPoint(this.pointsContainer, this.currentStep - 1);
                }
                break;
            }
        }
    }
    moveContainer(direction) {
        switch (direction) {
            case Direction.Next:
                moveContainerForward(this.overflowContainer);
                break;
            case Direction.Prev:
                moveContainerBackward(this.overflowContainer);
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=handler-manager.js.map