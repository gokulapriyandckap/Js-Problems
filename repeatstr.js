// function repeatstr(n,s){
//     let num = n
//     string  = s
// let result = string.repeat(n);
// return result
// }
// console.log(repeatstr(19,"gokul"))


function repeatstr(n,str) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += " " + str 
    }
    return result
}
console.log(repeatstr(9,"ha"))

