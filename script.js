const padelLeft = document.querySelector('.padel_1')
const padelRight = document.querySelector('.padel_2')


const movePadelLeft = () => {

    console.log(padelLeft.getBoundingClientRect().top)
    padelLeft.getBoundingClientRect().top = padelLeft.getBoundingClientRect().top + 20
    padelLeft.style.transform = "translateX(10px)"
    
    padelLeft.style.top = "10px"

    
}

padelLeft.addEventListener("click", movePadelLeft)


"translateX(10px)"
