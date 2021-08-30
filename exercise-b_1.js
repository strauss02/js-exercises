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
   console.log(`The lowest grade is ${currentLowestGrade}`)
   return currentLowestGrade
 }
 
getLowestGrade()

function getHighestGrade() {
  let currentHighestGrade = 0
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > currentHighestGrade) {
      currentHighestGrade = grades[i]
    }    
  }
  console.log(`The highest grade is ${currentHighestGrade}`)
  return currentHighestGrade
}

getHighestGrade()

function getRange() {
  let Range = (getHighestGrade() - getLowestGrade())
  console.log(`The range is ${Range}`)
}

getRange()

function getSortedGrades(Arr) {
  let sorted = Arr.sort()
  return sorted
}

function getMedian(Arr) {
  let localSortedGrades = getSortedGrades(Arr)
  let medianIndex = (((Arr.length)/2)-1)
  let medianGrade = localSortedGrades[medianIndex]
  console.log(`the median grade is  ${medianGrade}`)
  return medianGrade
  
}

getMedian(grades)

function getHalfPointIndex(Arr) {
  let halfPointIndex
  // I arbitrarily concluded that if the ammount of grades is odd then the first half would be one grade greater than the latter
  Arr.length % 2 === 0 ? halfPointIndex = Arr.length / 2 : halfPointIndex = (Arr.length-1) / 2   
  return halfPointIndex
  
}


function getHalfRange(Arr) {
let middleYearGrade = getHalfPointIndex(Arr)
  getMedian()
}