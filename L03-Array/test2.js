let furniture = ['Table','Chairs','Couch'];
let index = 0;
while (index < furniture.length) {
    const name = furniture[index];
    for (let i = 0; i < name.length;i++) {
        console.log(name[i]);
    }
    
    index++;
}