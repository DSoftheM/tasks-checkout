import { tasks } from "./task.js";
import { Direction } from "./task/task-list.js";
import { fillTasksList } from "./task/fill.js";
import { stepProgressHandler } from "./task/handlers/progress-bar-handler.js";
import { stepContainerHandler } from "./task/handlers/container-handler.js";
import { resizeHandler } from "./task/handlers/resize-handler.js";

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const line = document.querySelector(".progress-bar__line") as HTMLElement;
const descriptionsContainer = document.querySelector(".task__descriptions") as HTMLElement;
const pointsProgressContainer = document.querySelector(".progress-bar__ul") as HTMLElement;

fillTasksList(tasks, pointsProgressContainer, descriptionsContainer);

const moveProgress = stepProgressHandler(pointsProgressContainer, line);
const moveContainer = stepContainerHandler(descriptionsContainer);

nextButton?.addEventListener("click", (e) => handleNextButtonClick());
prevButton?.addEventListener("click", (e) => handlePrevButtonClick());

const handleNextButtonClick = () => {
    moveProgress(Direction.Next);
    moveContainer(Direction.Next);
};

const handlePrevButtonClick = () => {
    moveProgress(Direction.Prev);
    moveContainer(Direction.Prev);
};

// window.addEventListener("resize", resizeHandler(descriptionsContainer));
