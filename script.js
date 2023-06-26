const padelLeft = document.querySelector('.padel_1')
const padelRight = document.querySelector('.padel_2')


const movePadelLeft = () => {
    padelLeft.style.position = "relative";
    padelLeft.style.top = "10px"

    
}

padelLeft.addEventListener("click", movePadelLeft)