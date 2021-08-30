const grades = [73,91,88,56,62,84,95,96,88,92]
// get range 
//get median
//get second half range
 function getLowestGrade(Arr) {
     let currentLowestGrade = 100
   for (var i = 0; i < Arr.length; i++) {
     if (Arr[i] < currentLowestGrade ) {
       currentLowestGrade = Arr[i]
     }
   }
  //  console.log(`The lowest grade is ${currentLowestGrade}`)
   return currentLowestGrade
 }
 

function getHighestGrade(Arr) {
  let currentHighestGrade = 0
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > currentHighestGrade) {
      currentHighestGrade = Arr[i]
    }    
  }
  // console.log(`The highest grade is ${currentHighestGrade}`)
  return currentHighestGrade
}

function getRange(Arr) {
  let range = (getHighestGrade(Arr) - getLowestGrade(Arr))
  // console.log(`The range is ${range}`)
  return range
}

function getSortedGrades(Arr) {
  let sorted = [...Arr].sort()
  return sorted
}

function getMedian(Arr) {
  let localSortedGrades = getSortedGrades(Arr)
  let medianIndex = (((Arr.length)/2)-1)
  let medianGrade = localSortedGrades[medianIndex]
  // console.log(`the median grade is  ${medianGrade}`)
  return medianGrade
  
}

function getHalfPointIndex(Arr) {
  let halfPointIndex
  // I arbitrarily concluded that if the ammount of grades is odd then the first half would be one grade greater than the latter
  Arr.length % 2 === 0 ? halfPointIndex = Arr.length / 2 : halfPointIndex = (Arr.length-1) / 2   
  return halfPointIndex
  
}

function getSecondHalfGrades(Arr) {
  let halfPointIndex = getHalfPointIndex(Arr)
  // console.log("halfpointindex " + halfPointIndex)
  let secondHalfGradesArr = []
  // console.log("secondhalfgradesarray" + secondHalfGradesArr)
  for (let i = halfPointIndex; i < Arr.length; i++) {
    secondHalfGradesArr.push(Arr[i]) 
    // console.log("in the loop" + secondHalfGradesArr)
  }
  // console.log(secondHalfGradesArr)
  return secondHalfGradesArr
}

function getHalfRange(Arr) {
  // console.log(getRange(getSecondHalfGrades(Arr)))
  let secondHalfGrades = getSecondHalfGrades(Arr)
  return getRange(secondHalfGrades)
}


function getStats(Arr) {
  console.log (getRange(Arr))
  console.log (getMedian(Arr))
  console.log (getHalfRange(Arr))
}

// getSecondHalfGrades(grades)
// getHalfRange(grades)
// getStats(grades)