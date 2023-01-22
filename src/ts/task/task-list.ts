import { createDescriptionItem } from "./creteTaskDescription.js";
import { ITask } from "../task.js";

const taskBody = document.querySelector(".task__body") as HTMLElement;

// export const moveContainer = (container: HTMLElement, direction: Direction) => {
//     let offset = calculateTranstaleValue(taskBody, container.children.item(0) as HTMLElement);
//     offset = direction === Direction.Next ? -offset : offset;
//     let currentOffset = parseTranslateValue(container.style.transform);
//     container.style.transform = `translateX(${currentOffset + offset}px)`;
// }

export const moveContainerForward = (container: HTMLElement) => {
    let offset = -1 * calculateTranstaleValue(taskBody, container.children.item(0) as HTMLElement);
    let currentOffset = parseTranslateValue(container.style.transform);
    container.style.transform = `translateX(${currentOffset + offset}px)`;
};

export const moveContainerBackward = (container: HTMLElement) => {
    let offset = calculateTranstaleValue(taskBody, container.children.item(0) as HTMLElement);
    let currentOffset = parseTranslateValue(container.style.transform);
    container.style.transform = `translateX(${currentOffset + offset}px)`;
};

const calculateTranstaleValue = (overflowContainer: HTMLElement, containerItem: HTMLElement) => {
    const translateValue = (overflowContainer.clientWidth - containerItem.clientWidth) / 2 + containerItem.clientWidth;
    return translateValue;
};

export const parseTranslateValue = (str: string): number => {
    if (!str) return 0;
    const openBracketIndex = str.indexOf("(");
    const value = str.slice(openBracketIndex + 1, str.length - 3);
    return +value;
};

export enum Direction {
    Next = "Next",
    Prev = "Prev",
}
