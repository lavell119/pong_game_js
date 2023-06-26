const padelLeft = document.querySelector('.paddle_left')
const padelRight = document.querySelector('.paddle_right')


const movePadelLeft = () => {

    console.log(padelLeft.getBoundingClientRect().top)
    padelLeft.getBoundingClientRect().top = padelLeft.getBoundingClientRect().top + 20
    padelLeft.style.transform = "translateX(10px)"
    
    padelLeft.style.top = "10px"

    
}

padelLeft.addEventListener("click", movePadelLeft)


"translateX(10px)"
