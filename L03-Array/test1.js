let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let values3 = ['Mars',9,'Apple'];

let find = [values1,values2,values3];
let result = [];

for (let i = 0;i < find.length;i++) {
    for (let j = i + 1; j < find.length;j++) {
        if(find[i] === find[j] && !result.includes(find[i])) {
            result.push(find[i]);
        }
    }
}
console.log(find);