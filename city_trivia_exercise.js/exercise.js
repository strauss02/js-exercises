const cities = [
    Jerusalem = {
        isCapital:true,
        isCoastal:false,
        isFamous:true,
        isAncient:true 
    },
    Tel_Aviv = {
        isCapital:false,
        isCoastal:true,
        isFamous:true,
        isAncient:false 
    },
    Acre  = {
        isCapital:false,
        isCoastal:true,
        isFamous:false,
        isAncient:true 
    },
    Katzrin  = {
        isCapital:false,
        isCoastal: false,
        isFamous: false,
        isAncient:true 
    },
    Zikim  = {
        isCapital: false,
        isCoastal: true,
        isFamous: false,
        isAncient:false 
    },
    Musmus  = {
        isCapital: false,
        isCoastal: false,
        isFamous: false,
        isAncient: false 
    }
]

function guessCity(capital, coastal, famous, ancient) {

    let resultArray = cities.map(checkIfPropsMatch)

    function checkIfPropsMatch (object) {
        if (capital === object[isCapital] && coastal === object[isCoastal] && famous === object[isFamous] && ancient === object[isAncient]  ) {
            return true
        }
            else {
                return false
            }
    
}

}

console.log(cities.length)


