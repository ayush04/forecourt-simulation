const getRandomNumber = (from, to) => {
    const number = Math.random() * (to - from) + from + 0.1;
    return Math.round((number + Number.EPSILON) * 100) / 100;
};

const Utils = {
    getRandomNumber
};

export default Utils;