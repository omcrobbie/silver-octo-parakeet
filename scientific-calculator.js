const Calculator = require('./calculator');
module.exports = class ScientificCalculator extends Calculator {
    
    sin(exp) {
        return Math.sin(exp);
    }
    cos(exp) {
        return Math.cos(exp);
    }
    tan(exp) {
        return Math.tan(exp);
    }
    log(exp) {
        return Math.log(exp);
    }
}