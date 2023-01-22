import { Direction, moveContainerBackward, moveContainerForward } from "../task-list.js";
export const stepContainerHandler = (container, currentStep) => {
    const taskCount = (container === null || container === void 0 ? void 0 : container.childElementCount) || 0;
    return (direction) => {
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
//# sourceMappingURL=container-handler.js.map