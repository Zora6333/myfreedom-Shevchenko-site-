function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;}

    function getRandomRGB() {
        let color = "rgb("

        for (let i = 0; i < 3; i++) {
            color += getRandomInteger(0, 255) + ','
        }
        color += ')'
        console.log(color)

    }

getRandomRGB(getRandomInteger)    
