import { stepContainerHandler } from "./container-handler.js";
import { stepProgressHandler } from "./progress-bar-handler.js";
import { resizeHandler } from "./resize-handler.js";

export class HandlerManager {
    private step: number = 0;

    public getContainerHandler(container: HTMLElement) {
        return stepContainerHandler(container, this.step);
    }
    public getProgressBarHandler(pointsProgressContainer: HTMLElement, line: HTMLElement) {
        return stepProgressHandler(pointsProgressContainer, line, this.step);
    }
    public getResizeHandler(container: HTMLElement) {
        return resizeHandler(container, this.step);
    }
}

type Handler<T = any> = (...args: any[]) => void;
