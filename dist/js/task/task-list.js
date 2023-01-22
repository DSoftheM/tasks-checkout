const taskBody = document.querySelector(".task__body");
// export const moveContainer = (container: HTMLElement, direction: Direction) => {
//     let offset = calculateTranstaleValue(taskBody, container.children.item(0) as HTMLElement);
//     offset = direction === Direction.Next ? -offset : offset;
//     let currentOffset = parseTranslateValue(container.style.transform);
//     container.style.transform = `translateX(${currentOffset + offset}px)`;
// }
export const moveContainerForward = (container) => {
    let offset = -1 * calculateTranstaleValue(taskBody, container.children.item(0));
    let currentOffset = parseTranslateValue(container.style.transform);
    container.style.transform = `translateX(${currentOffset + offset}px)`;
};
export const moveContainerBackward = (container) => {
    let offset = calculateTranstaleValue(taskBody, container.children.item(0));
    let currentOffset = parseTranslateValue(container.style.transform);
    container.style.transform = `translateX(${currentOffset + offset}px)`;
};
const calculateTranstaleValue = (overflowContainer, containerItem) => {
    const translateValue = (overflowContainer.clientWidth - containerItem.clientWidth) / 2 + containerItem.clientWidth;
    return translateValue;
};
const parseTranslateValue = (str) => {
    if (!str)
        return 0;
    const openBracketIndex = str.indexOf("(");
    const value = str.slice(openBracketIndex + 1, str.length - 3);
    return +value;
};
export var Direction;
(function (Direction) {
    Direction["Next"] = "Next";
    Direction["Prev"] = "Prev";
})(Direction || (Direction = {}));
//# sourceMappingURL=task-list.js.map