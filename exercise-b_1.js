const grades = [73,91,88,56,62,84,95,96,88,92]
// get range 
//get median
//get second half range
 function getLowestGrade() {
     let currentLowestGrade = 100
   for (var i = 0; i < grades.length; i++) {
     if (grades[i] < currentLowestGrade ) {
       currentLowestGrade = grades[i]
     }
   }
   return currentLowestGrade
 }
 
getLowestGrade()