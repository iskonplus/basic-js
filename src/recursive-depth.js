module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 0;
        if (typeof arr === "object") {
            result += 1
        }
    
        arr.forEach(el => {
            if (typeof el === "object") {
                result += 1;
                check(el)
            } 
        });
    
        function check(el) {
            el.forEach(el => {
                if (typeof el === "object") {
                    result += 1;
                    check(el)
                } 
            })
        }
    
        return result

    }
};