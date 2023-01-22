import { tasks } from "./task.js";
import { Direction } from "./task/task-list.js";
import { fillTasksList } from "./task/fill.js";
import { HandlerManager } from "./task/handlers/handler-manager.js";

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const line = document.querySelector(".progress-bar__line") as HTMLElement;
const descriptionsContainer = document.querySelector(".task__descriptions") as HTMLElement;
const pointsProgressContainer = document.querySelector(".progress-bar__ul") as HTMLElement;

fillTasksList(tasks, pointsProgressContainer, descriptionsContainer);

const handlerManager = new HandlerManager();

const moveProgress = handlerManager.getProgressBarHandler(pointsProgressContainer, line);
const moveContainer = handlerManager.getContainerHandler(descriptionsContainer);
const resizeDescriptions = handlerManager.getResizeHandler(descriptionsContainer);

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

window.addEventListener("resize", resizeDescriptions);
