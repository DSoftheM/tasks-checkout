import { ITask } from "../task.js";
import { createDescriptionItem } from "./creteTaskDescription.js";

export const fillTasksList = (tasks: ITask[], pointsProgressContainer: HTMLElement, descriptionsContainer: HTMLElement) => {
    fillProgress(tasks, pointsProgressContainer);
    fillDescriptions(tasks, descriptionsContainer);
};

const fillProgress = (tasks: ITask[], pointsProgressContainer: HTMLElement) => {
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("progress-bar__point");
        pointsProgressContainer?.appendChild(li);
    });
};

const fillDescriptions = (tasks: ITask[], descriptionsContainer: HTMLElement) => {
    tasks.forEach((task, index) => {
        const descriptionItem = createDescriptionItem(task.description);
        descriptionsContainer?.appendChild(descriptionItem);
    });
};
