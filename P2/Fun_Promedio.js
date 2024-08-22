function getAverage(scores) {
    if (scores.length ===0){
      return 0;
    }
    let sum=0;
    for(let i=0;i<scores.length;i++){
      sum += scores[i];
    }
    const average = sum / scores.length;
    msj="The averange is : ";
    return msj + average;
  }
console.log(getAverage([10, 10, 11, 71, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log("Segunda funcion")
  function getGrade(score) {
    if (score == 100){
    grade="A +";
    }else if (score<=99 && score>=90){
    grade="A";
    }else if (score<=89 && score>=80){
    grade="B";
    }else if (score<=79 && score>=70){
    grade="C";
    }else if (score<=69 && score>=60){
    grade="D";
    }else{
    grade="F"
    }
return grade;    
}
 //fin de la funcion
console.log(getGrade(20));
console.log(getGrade(100));
console.log(getGrade(67));
console.log("tercera funcion")
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log("------Cuarta funcion-------");
function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore)) {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
      } else {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
      }
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));