let indexMoto = 0
const arrowRight = document.querySelector("#arrow-right")
const closeModalButton = document.querySelector("#close-button")
const arrowLeft = document.querySelector("#arrow-left")
const buttonLearnMore = document.querySelector("button")
const productImage = document.querySelector("#image")
const productTitle = document.querySelector("#title")
const productPrice = document.querySelector("#price")
const productPlan = document.querySelector("#plan")
const button = document.querySelector("#button-learn-more")
const modal = document.querySelector(".modal")
const motos = [
    {
        title: "Scooter Elétrica Voltz EV1",
        sourceIMG: "./assets/images/moto-1.png",
        description: "O câmbio de 6 marchas da Scooter oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        price: "123,90",
        plan: "30"
    },
    {
        title: "Honda CB 500X",
        sourceIMG: "./assets/images/moto-2.png",
        description: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        price: "619,90",
        plan: "25"
    },
    {
        title: "CB 300F",
        sourceIMG: "./assets/images/moto-3.png",
        description: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        price: "619,90",
        plan: "25"
    },
    {
        title: "CG 160",
        sourceIMG: "./assets/images/moto-4.png",
        description: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        price: "619,90",
        plan: "25"
    }
]

/* Carrossel Scripts */

arrowLeft.addEventListener("click", () => {
    indexMoto-=1
    clearInterval(rotate)
    return renderCarrossel(indexMoto)
})


arrowRight.addEventListener("click", () => {
    indexMoto+=1
    clearInterval(rotate)
    return renderCarrossel(indexMoto)
})

function renderCarrossel(index = 0) {
    if(indexMoto < 0) {
        indexMoto = motos.length - 1
        clearInterval(rotate)
        return renderCarrossel(indexMoto)
    }

    if(indexMoto >= Number(motos.length)) {
        indexMoto = 0
        return renderCarrossel(indexMoto)
    }

    productTitle.innerHTML=motos[index].title
    productPrice.innerHTML=`R$ ${motos[index].price}`
    productImage.setAttribute("src", motos[index].sourceIMG)
    productPlan.innerHTML=`Plano de ${motos[index].plan} meses`
}

renderCarrossel()

const rotate = setInterval(() => {
    indexMoto+=1
    renderCarrossel(indexMoto)
}, 4000)


/* Modal Scripts */


button.addEventListener("click", () => {
    modal.style.display="flex"
    modal.querySelector("#title-info").innerHTML=`${motos[indexMoto].title}`
    modal.querySelector("#description-info").innerHTML=`${motos[indexMoto].description}`
    modal.querySelector("img#image").setAttribute("src", motos[indexMoto].sourceIMG)
})

window.addEventListener("click", (event) => {
    if (event.target == modal) {
    modal.style.display = "none";
}})

closeModalButton.addEventListener("click", () => {
    modal.style.display="none"
})


