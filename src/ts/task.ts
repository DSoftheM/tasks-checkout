export interface ITask {
    id: string;
    description: string;
    answer: string;
    theme: Theme;
}

enum Theme {
    Biology,
    Geography,
    Math,
    History,
    Other,
}

export const tasks: ITask[] = [
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
