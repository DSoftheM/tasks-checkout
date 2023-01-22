import { Direction, moveContainerBackward, moveContainerForward } from "../task-list.js";

export const stepContainerHandler = (container: HTMLElement) => {
    const taskCount = container?.childElementCount || 0;
    let currentStep = 0;
    return (direction: Direction) => {
        switch (direction) {
            case Direction.Next:
                if (currentStep < taskCount) {
                    moveContainerForward(container);
                    currentStep++;
                }
                break;
            case Direction.Prev:
                if (currentStep > 0) {
                    moveContainerBackward(container);
                    currentStep--;
                }
                break;
            default:
                break;
        }
    };
};
