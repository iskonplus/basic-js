  
module.exports = function transform(arr) {
    let array = [];
    let check = 0;

      if(Array.isArray(arr)) {
        if (arr.length == 0 ) {
            return arr;
            
        } else {
          for (let i = 0; i < arr.length; i++){
              if (arr[i] === '--discard-next' ) {
                  check = 1;
                  
              } else if (arr[i] === '--discard-prev') {
                if (i > 0) {
                    array.pop();
                    
                };
              } else if (arr[i] === '--double-next') {
                if (i < arr.length - 1) {
                    array.push(arr[i + 1]);
                    
                };
              } else if (arr[i] === '--double-prev') {
                if (i > 0) {
                    array.push(arr[i - 1]);
                    
                };
              } else if (check == 1) {
                 check = 0;
                  
              } else {
                  array.push(arr[i]);
                  
              };
          };
        } 
      } else {
          throw new Error("Error");
    }
    
      return array;
  };