function promiseTimeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms);
    });
}

function longRunningOperatio() {
    return 42;
}
async function run() {
    console.log("Start!!");
    await promiseTimeout(2000);
    const response = await longRunningOperatio();
    console.log(response);
    console.log("Stop!!");
}

console.log("Before run");
run();
console.log("After run");