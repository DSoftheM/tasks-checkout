import { setProgressLineWidth, fillPoint, clearPoint } from "../progress-bar.js";
import { Direction, moveContainerBackward, moveContainerForward, parseTranslateValue } from "../task-list.js";

export class Tasks {
    private currentStep: number = 0;
    private prevWidth: number = window.visualViewport.width;

    constructor(
        private taskCount: number,
        private pointsContainer: HTMLElement,
        private line: HTMLElement,
        private overflowContainer: HTMLElement,
        private elementToCorrent: HTMLElement
    ) {
        window.addEventListener("resize", () => this.rezise());
    }

    public stepHandler(stepDirection: Direction) {
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

    private rezise() {
        if (this.currentStep > 0) {
            const currentWidth = window.visualViewport.width;
            const offset = this.prevWidth - currentWidth;
            this.prevWidth = currentWidth;
            const currentTranslateValue = parseTranslateValue(this.elementToCorrent.style.transform);
            this.elementToCorrent.style.transform = `translateX(${currentTranslateValue + offset}px)`;
        }
    }

    private moveProgress(direction: Direction) {
        const taskCount = this.pointsContainer.childElementCount || 0;
        const valueByOneStep = 100 / (taskCount - 1);
        switch (direction) {
            case Direction.Next: {
                if (this.currentStep === 0) {
                    setProgressLineWidth(valueByOneStep / 4, this.line);
                    fillPoint(this.pointsContainer, 0);
                } else {
                    setProgressLineWidth(valueByOneStep, this.line);
                    fillPoint(this.pointsContainer, this.currentStep);
                }
                break;
            }
            case Direction.Prev: {
                if (this.currentStep >= taskCount) {
                    setProgressLineWidth((-valueByOneStep * 3) / 4, this.line);
                    clearPoint(this.pointsContainer, this.currentStep - 1);
                } else {
                    setProgressLineWidth(-valueByOneStep, this.line);
                    clearPoint(this.pointsContainer, this.currentStep - 1);
                }
                break;
            }
        }
    }

    private moveContainer(direction: Direction) {
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
