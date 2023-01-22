var Theme;
(function (Theme) {
    Theme[Theme["Biology"] = 0] = "Biology";
    Theme[Theme["Geography"] = 1] = "Geography";
    Theme[Theme["Math"] = 2] = "Math";
    Theme[Theme["History"] = 3] = "History";
    Theme[Theme["Other"] = 4] = "Other";
})(Theme || (Theme = {}));
export const tasks = [
    {
        id: "1",
        theme: Theme.Biology,
        description: "Какого цвета трава ?",
        answer: "Зеленого",
    },
    {
        id: "2",
        theme: Theme.Geography,
        description: "Столица Росиии ?",
        answer: "Москва",
    },
    {
        id: "3",
        theme: Theme.Math,
        description: "Сколько мм в 1 см ?",
        answer: "В одном сантиметре 10 мм",
    },
    {
        id: "4",
        theme: Theme.History,
        description: "Сколько лет планете ?",
        answer: "2023",
    },
];
//# sourceMappingURL=task.js.map