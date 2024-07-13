function kolobok(character) {
    switch (character.toLowerCase()) {
        case "дедушка":
            return `Я от дедушки ушёл`;
        case "заяц":
            return `Я от зайца ушёл`;
        case "лиса":
            return "Меня съели";
        default:
            return "С этим персонажем я не встречался.";
    }
}

let character = prompt("Введите имя персонажа для сказки про колобка:");
if (character === "") {
    alert("Пожалуйста, введите имя персонажа.");
} else if (character === null) {
    alert("Пользователь отменил действие.");
} else {
    character = character.trim();
    if (character.length === 0) {
        alert("Пожалуйста, введите имя персонажа.");
    }
}

let result = kolobok(character);
alert(result);

function newYear(character2) {
    if (!character2) {
        throw new Error("Персонаж не указан.");
    }

    switch (character2.toLowerCase()) {
        case "дед мороз":
            return `${"Дед Мороз! ".repeat(3)}`;
        case "снегурочка":
            return `${"Снегурочка! ".repeat(3)}`;
        default:
            return "Этот персонаж не известен мне.";
    }
}

let character2 = prompt("Введите имя персонажа для сказки про новый год:");
let result2 = newYear(character2);
alert(result2);
