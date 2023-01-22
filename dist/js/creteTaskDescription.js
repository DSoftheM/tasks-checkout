export const createDescriptionItem = ({ answer, description, id, theme }, taskNumber) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task__description");
    taskItem.textContent = description;
    return taskItem;
    // taskItem.innerHTML = `
    //     <div class="task__order">
    //         <div class="rounded-block">Задание ${taskNumber}</div>
    //     </div>
    //     <div class="task__description">${description}</div>
    //     <div class="bottom-task">
    //         <div class="bottom-task__left">
    //             <div class="rounded-block rounded-block_answer">Ответ:</div>
    //             <div class="bottom-task__answer">${answer}</div>
    //         </div>
    //         <div class="bottom-task__right">
    //             <button class="rounded-block rounded-block_button prev">Назад</button>
    //             <button class="rounded-block rounded-block_button next">Далее</button>
    //         </div>
    //     </div>
    // `;
};
//# sourceMappingURL=creteTaskDescription.js.map