module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let result = 0;

        arr.forEach(el => {
            if (Array.isArray(el)) {
    
                let newCalculateDepth = this.calculateDepth(el);    
                if (newCalculateDepth > result) {
                    result = newCalculateDepth;
                }
            }
        });
    
        result += 1;
        return result;

    }
};