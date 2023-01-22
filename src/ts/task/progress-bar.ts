import { Direction } from "./task-list.js";

const POINT_DONE = "#28d928";
const POINT_DONT_DONE = "#e7e5e5";

export const setProgressLineWidth = (width: number, line: HTMLElement) => {
    let currentWidth: number = +line.style.width.replace("%", "");
    let totalWidth = currentWidth + width;
    if (totalWidth > 100) {
        totalWidth = 100;
    }
    if (totalWidth < 0) {
        totalWidth = 0;
    }
    line.style.width = `${totalWidth.toFixed(2)}%`;
};

export const fillPoint = (pointsContainer: HTMLElement, index: number) => {
    (pointsContainer.children[index] as HTMLElement).style.backgroundColor = POINT_DONE;
};

export const clearPoint = (pointsContainer: HTMLElement, index: number) => {
    (pointsContainer.children[index] as HTMLElement).style.backgroundColor = POINT_DONT_DONE;
};
