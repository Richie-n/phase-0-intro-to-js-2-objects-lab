// Write your solution in this file!
const employee = {
    name: 'Richard',
    streetAddress: 'Kikuyu',
}
console.log(employee)
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
        ...obj,
        [key]:value,
    }

}
const newEmployee = updateEmployeeWithKeyAndValue(employee,"name","Njoroge")

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value
    return obj
}
const otherEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","Karen")

function deleteFromEmployeeByKey(obj, key) {
    const  newObj= { ...obj };

        delete newObj[key];
      

    return newObj;
}
const firedEmployee =deleteFromEmployeeByKey(employee,"name")

function destructivelyDeleteFromEmployeeByKey(obj, key) {
        delete obj[key];
        return obj
}
const lastEmployee = destructivelyDeleteFromEmployeeByKey(employee, "streeAddress")
    





