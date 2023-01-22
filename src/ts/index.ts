import { tasks } from "./task.js";
import { Direction } from "./task/task-list.js";
import { fillTasksList } from "./task/fill.js";
import { Tasks } from "./task/handlers/handler-manager.js";

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const line = document.querySelector(".progress-bar__line") as HTMLElement;
const descriptionsContainer = document.querySelector(".task__descriptions") as HTMLElement;
const pointsProgressContainer = document.querySelector(".progress-bar__ul") as HTMLElement;
const taskBody = document.querySelector(".task__body") as HTMLElement;

fillTasksList(tasks, pointsProgressContainer, descriptionsContainer);

const handlerManager = new Tasks(tasks.length, pointsProgressContainer, line, descriptionsContainer, descriptionsContainer);

nextButton?.addEventListener("click", (e) => handleNextButtonClick());
prevButton?.addEventListener("click", (e) => handlePrevButtonClick());

const handleNextButtonClick = () => {
    handlerManager.stepHandler(Direction.Next);
};

const handlePrevButtonClick = () => {
    handlerManager.stepHandler(Direction.Prev);
};
