const cities = [
    Jerusalem = {
        isCapital:true,
        isCoastal:false,
        isFamous:true,
        isAncient:true ,
        cityName: "Jerusalem"
    },
    Tel_Aviv = {
        isCapital:false,
        isCoastal:true,
        isFamous:true,
        isAncient:false ,
        cityName: "Tel Aviv"
    },
    Acre  = {
        isCapital:false,
        isCoastal:true,
        isFamous:false,
        isAncient:true ,
        cityName: "Acre"
    },
    Katzrin  = {
        isCapital:false,
        isCoastal: false,
        isFamous: false,
        isAncient:true ,
        cityName: "Katzrin"
    },
    Zikim  = {
        isCapital: false,
        isCoastal: true,
        isFamous: false,
        isAncient:false ,
        cityName: "Zikim"
    },
    Musmus  = {
        isCapital: false,
        isCoastal: false,
        isFamous: false,
        isAncient: false ,
        cityName: "Musmus"
    }
]


function guessCity(capital, coastal, famous, ancient) {

    let triviaAnswer = "No city matches those properties."

    function checkIfPropsMatch (object) {
        if (capital === object.isCapital && coastal === object.isCoastal && famous === object.isFamous && ancient === object.isAncient  ) {
            triviaAnswer = object.cityName
        }

    }
    cities.map(checkIfPropsMatch)

    return triviaAnswer

}

guessCity(false,false,false,false)


