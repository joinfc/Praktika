const sumArrayInput = document.querySelector("#sumArray"), 
      getAboveZeroInput = document.querySelector("#getAboveZero"),
      getPoniesInput = document.querySelector("#getPonies"),
      isTxIncludedInput = document.querySelector("#isTxIncluded"),
      getSizesInput = document.querySelector("#getSizes"),
      getWithSpacesInput = document.querySelector("#getWithSpaces"),
      getEpisodesInput = document.querySelector("#getEpisodes"),
      tripleInput = document.querySelector("#triple"),
      getAvgGlucoseInput = document.querySelector("#getAvgGlucose")
      
const result1 = document.querySelector("#resultFirstExercise"),
      result2 = document.querySelector("#resultSecondExercise"),
      result3 = document.querySelector("#resultThirdExercise"),
      result4 = document.querySelector("#resultFourthExercise"),
      result5 = document.querySelector("#resultFifthExercise"),
      result6 = document.querySelector("#resultSixthExercise"),
      result7 = document.querySelector("#resultSeventhExercise"),
      result8 = document.querySelector("#resultEighthExercise"),
      result9 = document.querySelector("#resultNinethExercise")

sumArrayInput.addEventListener("input", () => {
    arr = sumArrayInput.value.split(' ').map(x => {return parseInt(x)})
    result1.textContent = sumArray(arr)
})
getAboveZeroInput.addEventListener("input", () => {
    arr = getAboveZeroInput.value.split(' ').map(x => {return parseInt(x)})
    result2.textContent = getAboveZero(arr)
})
getPoniesInput.addEventListener("input", () => { 
    arr = getPoniesInput.value.split(' ')
    result3.textContent = getPonies(arr)
})
isTxIncludedInput.addEventListener("input", () => {
    arr = isTxIncludedInput.value.split(' ')
    result4.textContent = isTxIncluded(arr)
})
getSizesInput.addEventListener("input", () => { 
    arr = getSizesInput.value.split(' ')
    result5.textContent = getSizes(arr)
})
getWithSpacesInput.addEventListener("input", () => { 
    arr = getWithSpacesInput.value.split(' ')
    result6.textContent = getWithSpaces(arr)
})
getEpisodesInput.addEventListener("input", () => { 
    arr = getEpisodesInput.value.split(' ')
    result7.textContent = getEpisodes(arr)
})
tripleInput.addEventListener("input", () => { 
    arr = tripleInput.value.split(' ').map(x => {return parseInt(x)})
    result8.textContent = triple(arr)
})
getAvgGlucoseInput.addEventListener("input", () => { 
    arr = getAvgGlucoseInput.value.split(' ').map(x => {return parseFloat(x)})
    result9.textContent = getAvgGlucose(arr)
})


function sumArray(ints) {
    let sum = 0
    ints.forEach((x) => sum += x)
    console.log(ints)
    return sum
}

function getAboveZero(ints) {
    return ints.filter(x => x > 0)
}

function getPonies(ponies) {
    findName = ponies.pop()
    return ponies.find(x => x == findName)
}

function isTxIncluded(transactions) {
    tName = transactions.pop()
    return transactions.includes(tName)
}

function getSizes(words) {
    words.forEach((x, index) => words[index] = x.length)
    return words
}

function getWithSpaces(words) {
    let result = words.join(" ")
    return [result, result.length]
}

function getEpisodes(data) {
    let obj = {
        title: data[0],
        series: parseInt(data[1])
    }

    return `Аниме ${obj.title} включает ${obj.series} серий`
}

function triple(digit) {
    return ((x) => x * 3)(digit)
}

function getAvgGlucose(data) {
    let sum = 0
    data.forEach((x) => sum += x)

    return sum / data.length
}

function task(func, valueFunc, result, element) {
    result.textContent = func(element.value.split(' ').map(x => {return valueFunc(x)}))
}