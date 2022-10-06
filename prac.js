const object = {
    name : "nemo",
    age : 4323
}

const object2 = {
    ...object,
    name : "semo",
    age :  9483,
    hobby : "coding"
}

console.log(JSON.stringify(object2)) //{"name":"semo","age":9483,"hobby":"coding"}
