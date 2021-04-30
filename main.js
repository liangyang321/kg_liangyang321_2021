let map = new Map([
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"],
    [6, "Six"],
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
    [0, "Zero"]
]);
var res = [];
function parse (number){
    var output = "";
    while (number) {
        output  = map.get((number % 10)) + output;
        number = Math.floor(number/10);
    }
    res.push(output);
    
}

var myArgs = process.argv.slice(2);
for (var i = 0; i < myArgs.length; i++){
    parse(myArgs[i]);
}

console.log(res)



