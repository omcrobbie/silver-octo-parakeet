module.exports = class Calculator {
    add(...vals) {
        return vals
            .reduce((sum,val) => sum += val, 0 );
    }
    subtract(...vals) {
        return vals
            .slice(1)
            .reduce((startVal, val) => startVal -= val, vals[0])
    }
    multiply(...vals) {
        return vals
            .slice(1)
            .reduce((prod,val) => prod *= val, vals[0] );
    }
    divide(...vals) {
        let quot = vals[0];
        vals = vals.slice(1);
        for (const val of vals) {
            if (!val) {
                return NaN;
            }
            quot /= val;
        }
        return quot;
    }
}