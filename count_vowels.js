// function count_vowels(name,word){
//   let count=0;
//   for(let i = 0;i < name.length;i++){

    
//     if(name[i]== word){
//       count++
//     }
//   }
//   return count
// }

// console.log(count_vowels("gokulapriyan","a"))














function countvowels(name,vowel) {
  let count=0

  for (let i = 0; i < name.length; i++) {
  // console.log(i);
    if (name[i] == vowel) {
      count+=1
    }
  }
  return count
}
console.log(countvowels("gokulapriyan","a"));