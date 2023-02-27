// 2. A student got marks in different subjects as follows [40, 4, 50, 70, 8, 5, 50] in his report card, he decided to  change
// his marks for only the subjects he failed. So he multiplied the marks by 10 for the subjects where he scored less than 9.

// Write a function named "changingMarks" which takes array as input parameter and outputs the modified array.

// [40,4, 50, 70, 8, 5, 50] => [40,40,50,70,80,50,50] (only 4, 8, 5 are the subject marks less than 9, so multiply it by 10);


function changingMarks(Marks) {
    let result = [];
    for (let i = 0; i < Marks.length; i++) {
        if (Marks[i]<9) {
            result.push(Marks[i]*10);
        }
        else{
            result.push(Marks[i])
        }
    }
    return result
}
console.log(changingMarks([40, 4, 50, 70, 8, 5, 50]));
