const func = (num, times) => {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';
    for (let i = 1; i <= times; i++) {

        if (i == times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }


    }
    return str;
}

console.log(func(5, 3));