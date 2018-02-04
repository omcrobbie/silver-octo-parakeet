function withExponents() {
    function getPows(...arrs) {
        return arrs.map(([left, right]) => pow(left, right));
    }
    function pow (left, right) {
        return Math.pow(left,right);
    }
    function multiplyExp (...vals) {
        const pows = getPows(...vals);
        return this.multiply(...pows);
    }
    function divideExp(...vals) {
        const pows = getPows(...vals);
        return this.divide(...pows);
    }
    Object.assign(this, {pow, multiplyExp, divideExp});
}
function delay(time, instance, fn, vals) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!instance[fn]) {
                return reject()
            }
            resolve(instance[fn](...vals));
        }, time);
    });
}
module.exports = {withExponents, delay};