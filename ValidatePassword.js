// Write a function named "validatePassword" which takes string as parameter and validates whether the password given is valid or invalid based on the below conditions.

// -> The password should contain atleast 7 letters or more
// -> First letter should not be a special character(@,#,_,-)
// -> First letter of the password should always be an uppercase letter 
// -> The password should atleast contain one special character (@,#,_,-)

//  If it's valid password,return true
//  If it's invalid password, return false

// ("Ram@kumar") => true (satisifies all the above condition)
// ("arun_prasanth") => false (first char is not in uppercase)
// ("@govind-raj") => false(It starts with special char)
// ("Sam@")=> false(character length is less than 7 letters)
// && password[i][0] == password[i][0].toUpperCase() 
function validatePassword(password){
    for (let i = 0; i < password.length; i++) {
        if (password.length >8 && password.match("@","_","-","#") && password.charAt(0) == password.charAt(0).toUpperCase() && !password.charAt(0).match("@","_","-","#")){ 
                return true
        }      
        else{
           return false
        }  
}
}
console.log(validatePassword("Akash@123"))