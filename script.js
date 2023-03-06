
 // Глобальные переменные
    const url = 'https://flagcdn.com/en/codes.json'
    let country = '';
    const input = document.querySelector('.AnswerInput')   
    const countryBlock = document.querySelector('.countryBlock')   
    const imgA = document.querySelector('img')
    const main = document.querySelector('main')
    const points = document.querySelector('.points')
    const winWindow = document.querySelector('.winWindow') 
    const modelTrue = document.querySelector('.modelTrue') 
    const shadowRed = document.querySelector('.shadowRed') 
    const shadowGreen = document.querySelector('.shadowGreen') 
    const helpBtn = document.querySelector('.helpBtn') 
    const helpC = document.querySelector('.helpC')
    
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
                modelTrue.innerHTML = ''
                shadowGreen.classList.remove('none')
                setTimeout(() => {
                    shadowGreen.classList.add('none')
                }, 200);
                pointCount += randomPoint
                points.innerHTML = pointCount
                flagGenerator()
                if (randomPoint <= 5) {
                    helpCount++
                    helpC.innerHTML = helpCount
                }
                input.value = ''
            } else {
    
                shadowRed.classList.remove('none')
                // shadowRed.addEventListener('mousemove', ()=> {
                //     shadowRed.classList.add('none')
                // })
                // shadowRed.classList.remove('none')
                setTimeout(() => {
                    shadowRed.classList.add('none')
                }, 200);
                const randomPoint2 = Math.floor(Math.random() * 3)
                pointCount -= randomPoint2
                points.innerHTML = pointCount
            if (pointCount >= 30) {
                main.classList.add('none')
                points.classList.add('none')
                winWindow.classList.remove('none')
            }
        }
        }})
    
    
    
    
    
    setTimeout(() => {
        main.classList.remove('none')
        points.classList.remove('none')
    }, 1000)
    

    
    
    let helpCount = 5
    helpC.innerHTML = helpCount
    helpBtn.addEventListener('click', ()=> {
        if (helpCount != 0) {
            modelTrue.innerHTML =  `<div class="modalWin">Подсказка:  ${country}</div>`
            modelTrue.addEventListener('dblclick', ()=> {
                modelTrue.innerHTML = ''
            })
            helpCount--
        }
        helpC.innerHTML = helpCount
    })
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
