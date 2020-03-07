module.exports = function createDreamTeam(arr) {
  let nameItem = ""
  if (!Array.isArray(arr)) {
      return false
    }

  for (let i = 0; i < arr.length; i++) {
     
      typeof arr[i] !== "string" ||
        (nameItem += arr[i].trim()[0]);
    
  } 

 return nameItem.toUpperCase().split("").sort().join("")

};