import { tasks } from "./task.js";
import { Direction } from "./task/task-list.js";
import { fillTasksList } from "./task/fill.js";
import { stepProgressHandler } from "./task/handlers/progress-bar-handler.js";
import { stepContainerHandler } from "./task/handlers/container-handler.js";
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const line = document.querySelector(".progress-bar__line");
const descriptionsContainer = document.querySelector(".task__descriptions");
const pointsProgressContainer = document.querySelector(".progress-bar__ul");
fillTasksList(tasks, pointsProgressContainer, descriptionsContainer);
const moveProgress = stepProgressHandler(pointsProgressContainer, line);
const moveContainer = stepContainerHandler(descriptionsContainer);
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", (e) => handleNextButtonClick());
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", (e) => handlePrevButtonClick());
const handleNextButtonClick = () => {
    moveProgress(Direction.Next);
    moveContainer(Direction.Next);
};
const handlePrevButtonClick = () => {
    moveProgress(Direction.Prev);
    moveContainer(Direction.Prev);
};
// window.addEventListener("resize", resizeHandler(descriptionsContainer));
//# sourceMappingURL=index.js.map