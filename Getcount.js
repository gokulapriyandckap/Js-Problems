
// 2.Write a function named "getCount" which takes one paramater (string) and returns the counts of all vowels in that string

// vowels  -> a, e, i, o, u
// Note: Always input string will be in lowercase letter

function getCount(Word) {
    let counts = 0;
    for (let i = 0; i < Word.length; i++) {
        if (Word[i]== "a" || Word[i]== "e" || Word[i]== "i" || Word[i]== "o" || Word[i]== "u") {
            counts++
        }
    }
    return counts
}
console.log(getCount("gokul"))