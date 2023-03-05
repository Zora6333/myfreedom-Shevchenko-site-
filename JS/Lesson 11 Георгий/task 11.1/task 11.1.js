let rel = ['Оля','Даша','Вова','Дима'];
let X =(rel[0],rel[1])
let Y =(rel[0],rel[1])
function ShowName(X,Y,...rest){


            console.log(rest[0])
            console.log(rest[1])
}

ShowName(...rel)

