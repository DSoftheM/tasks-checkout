const POINT_DONE = "#28d928";
const POINT_DONT_DONE = "#e7e5e5";
export const setProgressLineWidth = (width, line) => {
    let currentWidth = +line.style.width.replace("%", "");
    let totalWidth = currentWidth + width;
    if (totalWidth > 100) {
        totalWidth = 100;
    }
    if (totalWidth < 0) {
        totalWidth = 0;
    }
    line.style.width = `${totalWidth.toFixed(2)}%`;
};
export const fillPoint = (pointsContainer, index) => {
    pointsContainer.children[index].style.backgroundColor = POINT_DONE;
};
export const clearPoint = (pointsContainer, index) => {
    pointsContainer.children[index].style.backgroundColor = POINT_DONT_DONE;
};
//# sourceMappingURL=progress-bar.js.map