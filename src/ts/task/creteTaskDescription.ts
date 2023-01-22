import { ITask } from "../task.js";

export const createDescriptionItem = (description: ITask["description"]) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task__description");
    taskItem.textContent = description;
    return taskItem;
};
