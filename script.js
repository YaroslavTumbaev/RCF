
const url = 'https://flagcdn.com/en/codes.json'
let country = '';
const input = document.querySelector('.AnswerInput')   
const countryBlock = document.querySelector('.countryBlock')   
const imgA = document.querySelector('img')
const main = document.querySelector('main')
const points = document.querySelector('.points')
const winWindow = document.querySelector('.winWindow')
let pointCount = 0;

async function flagGenerator() {
    const respons = await fetch(url)
    const data = await respons.json()
    const randomel = Math.floor(Math.random() * 306)
    const flags = Object.keys(data)
    const countrys = Object.values(data)

    const flagUrl = `https://flagcdn.com/256x192/${flags[randomel]}.png`
    const countryName = countrys[randomel]
    
    country = countryName
    console.log(country);
    const img = document.createElement('img')
    img.src = flagUrl
    countryBlock.innerHTML = `<img src="${flagUrl}"></img>`
}

flagGenerator()

let num = 0;


document.addEventListener('keypress', (event) => {
    if(event.code === 'Enter') {
        const randomPoint = Math.floor(Math.random() * 10)
        if (input.value === country) {
            alert(`+${randomPoint} очков`)
            pointCount += randomPoint
            points.innerHTML = pointCount
            flagGenerator()
        } else {
            alert('Неверно!')
            alert('Подсказка:' + country)
        }
        input.value = ''
        if (pointCount >= 30) {
            main.classList.add('none')
            points.classList.add('none')
            winWindow.classList.remove('none')
        }
    }
})

setTimeout(() => {
    main.classList.remove('none')
    points.classList.remove('none')
}, 9000)