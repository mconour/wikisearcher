let unique = [];


random = () => {
    if (!unique.length) {
        for (let i = 0; i < 9; i++) {
            unique.push(i);
        }
    }

    let index = Math.floor(Math.random() * unique.length);
    let number = unique[index];
    unique.splice(index, 1);

    return number;
}



