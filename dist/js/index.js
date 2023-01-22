import { tasks } from "./task.js";
import { Direction } from "./task/task-list.js";
import { fillTasksList } from "./task/fill.js";
import { Tasks } from "./task/handlers/handler-manager.js";
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const line = document.querySelector(".progress-bar__line");
const descriptionsContainer = document.querySelector(".task__descriptions");
const pointsProgressContainer = document.querySelector(".progress-bar__ul");
const taskBody = document.querySelector(".task__body");
fillTasksList(tasks, pointsProgressContainer, descriptionsContainer);
const handlerManager = new Tasks(tasks.length, pointsProgressContainer, line, descriptionsContainer, descriptionsContainer);
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", (e) => handleNextButtonClick());
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", (e) => handlePrevButtonClick());
const handleNextButtonClick = () => {
    handlerManager.stepHandler(Direction.Next);
};
const handlePrevButtonClick = () => {
    handlerManager.stepHandler(Direction.Prev);
};
//# sourceMappingURL=index.js.map