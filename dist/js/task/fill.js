import { createDescriptionItem } from "./creteTaskDescription.js";
export const fillTasksList = (tasks, pointsProgressContainer, descriptionsContainer) => {
    fillProgress(tasks, pointsProgressContainer);
    fillDescriptions(tasks, descriptionsContainer);
};
const fillProgress = (tasks, pointsProgressContainer) => {
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("progress-bar__point");
        pointsProgressContainer === null || pointsProgressContainer === void 0 ? void 0 : pointsProgressContainer.appendChild(li);
    });
};
const fillDescriptions = (tasks, descriptionsContainer) => {
    tasks.forEach((task, index) => {
        const descriptionItem = createDescriptionItem(task.description);
        descriptionsContainer === null || descriptionsContainer === void 0 ? void 0 : descriptionsContainer.appendChild(descriptionItem);
    });
};
//# sourceMappingURL=fill.js.map