/*const buttons = document.querySelectorAll('.button')

const tripulação = document.querySelectorAll('.persona')

const infos = document.querySelectorAll('.about')

console.log(tripulação.length)

let current_value = 0

const max_trip = tripulação.length

buttons.forEach(button=>{
    const left = button.classList.contains('btL')
    button.addEventListener('click',()=>{
        
       

        if (left){
            current_value-=1
            if (current_value<0){
                current_value=max_trip-1
            }
            console.log(current_value)
        }else{
            current_value+=1
            if (current_value>max_trip-1){
                current_value=0
            }
            console.log(current_value)
        }

        tripulação[current_value].scrollIntoView({
            inline:'center',
        })
        
        infos.forEach(info=>{
            if (info!=infos[current_value]){
                info.classList.remove('choiced')
            }else{
                info.classList.add('choiced')
            }
        })

        
    })
})*/


const personagens = document.querySelectorAll('.persona')
const botoes = document.querySelectorAll('.button')
const infos = document.querySelectorAll('.about')

let cur_value = 0
const max_trip = personagens.length
console.log(max_trip)

botoes.forEach(botao =>{
    const left = botao.classList.contains('btL')
    
    botao.addEventListener('click',()=>{
        if (left){
            cur_value-=1
            cur_value<0?cur_value=max_trip:cur_value
            console.log(cur_value)
        }
        else{
            cur_value+=1
            cur_value>max_trip?cur_value=0:cur_value
            console.log(cur_value)
        }

        personagens[cur_value].scrollIntoView({
            inline:"center"
        })

        infos.forEach(info=>{
            info!=infos[cur_value]?info.classList.remove('choiced'):info.classList.add('choiced')
        })
    })
})