
// global variables
// stores current language under process
var currentPick

// keep track of the mistakes use has made till now
var incorrectGuess = 0

// guesssed chars
var guesssedChars = []
var currectGuess  = []


function reset() {
    currentPick = null
    incorrectGuess = 0
    guesssedChars = []
    currectGuess = []
    image = document.getElementById('image')
    image.style.backgroundImage = "url('')"
    clearPlaceHolder()
}

function clearPlaceHolder() {
    
    // remove all divs from screen div
    divScreen = document.getElementById('screen')
    divChilds = document.querySelectorAll('#screen > div')
    
    for(var i = 0; i < divChilds.length; i++) {
        divScreen.removeChild(divChilds[i])
    }
}

function randomLanguage(ulang) {
    N = ulang.length

    index = Math.floor(Math.random() * N)
    return ulang[index]
}

function  createPlaceHolder(len) {
    divScreen = document.getElementById('screen')
    
    for(var i = 0; i < len; i++) {
        var new_div = document.createElement('div')
        divScreen.appendChild(new_div)
        //alert()
    }
}

function repopulatePlaceHolder() {
    
    // remove all divs from screen div
    divScreen = document.getElementById('screen')
    divChilds = document.querySelectorAll('#screen > div')
    
    //alert(divChilds.length)

    for(var i = 0; i < divChilds.length; i++) {
        divScreen.removeChild(divChilds[i])
    }

    // repopulate
    str = ''
    for(var i = 0; i < currentPick.length; i++) {
        if(currectGuess.indexOf(currentPick[i]) == -1) {
            var new_div = document.createElement('div')
            str = str + ' '
            new_div.innerHTML = ' '
            divScreen.appendChild(new_div)
        }
        else {
            var new_div = document.createElement('div')
            str = str + currentPick[i]
            new_div.innerHTML = currentPick[i]
            divScreen.appendChild(new_div)
        }
    }

    if(str == currentPick) {
        alert('You Win !!')
        main()
    }
    



}


function updateHangman(percentageWrong) {
    //alert(percentageWrong)
    image = document.getElementById('image')
    
    switch(percentageWrong) {
        case 10:
        case 20:
            image.style.backgroundImage = "url('images/Hangman-0.png')"
        break
        case 30:
        case 40:
            image.style.backgroundImage = "url('images/Hangman-1.png')"
        break
        case 50:
        case 60:
            image.style.backgroundImage = "url('images/Hangman-2.png')"
        break
        case 70:
            image.style.backgroundImage = "url('images/Hangman-3.png')"
        break
        case 80:
            image.style.backgroundImage = "url('images/Hangman-4.png')"
        break
        case 90:
            image.style.backgroundImage = "url('images/Hangman-5.png')"
        break
        case 100:
            image.style.backgroundImage = "url('images/Hangman-6.png')"
            alert('You Loose !!'
                 + "\nIt's " + currentPick )
            main()
        
    }

}

function toCharArray(string) {
    var arr = []
    for(ch of string)
        arr.push(ch)

    return arr
}


function getKeyPress(key) {
    // here we have both current pick: currentPick
    // and pressed Key: key
    
    totalChars = currentPick.length
    
    var uniqueChars = toCharArray(currentPick).filter(function(element, index, arr){
                        if(element != arr[index+1])
                            return element
                    })
    
    var index = -1
    // if key is not aleady guessed
    if(guesssedChars.indexOf(key) == -1) {
        guesssedChars.push(key)
        index = uniqueChars.indexOf(key)
    }

    ulen = uniqueChars.length
    
    if(index == -1) {
        incorrectGuess++
        var percentageWrong = Math.floor((incorrectGuess/ ulen) * 100)
        updateHangman(Math.floor(percentageWrong * .10) * 10)
        /* alert('pick : ' + currentPick + '\n ulen : ' + ulen + '\n tlen : ' 
                        + totalChars + '\n incguess :' 
                        + incorrectGuess
                        + '\n Percentage woring : ' + percentageWrong
                        + '\n Ceil : ' + Math.floor(percentageWrong * .10) * 10 ) */
    }
    else {
        currectGuess.push(key)
        repopulatePlaceHolder()
    }
    
}

function main() {
    //reset all values
    reset()

    // all function call will be made from here
    var ulang = uniqueLanguages()
    
    // randomly select a pick
    var pick = randomLanguage(ulang)
    //pick = 'JAVA'
    currentPick = pick // will be further used in getKeyPress function


    // set the placeholder for the picked language
    createPlaceHolder(pick.length)

}




