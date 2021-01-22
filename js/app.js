//      VARIABLES - OBJETO

let genero = ''
let peso = ''
let altura = ''
let edad = ''
let grasCorp = ''
let actlvl = ''
let objetivo = ''
let percentObj = ''
let userCarbs = ''
let userProts = ''

let bmr = ''
let GainSurplus = ''
let amr = ''
let fat = ''
let protsAverage = ''
let carbsAverage = ''

const ketoUser = {}

//      EVENTOS
const form_Calc = document.querySelector("#calcForm")

form_Calc.addEventListener('submit', obtenerDatos,)

function obtenerDatos(e){
    e.preventDefault()
    genero = document.querySelector('input[name="Genero"]:checked').value
    peso = Number(document.querySelector('#peso').value)
    altura = Number(document.querySelector('#altura').value)
    edad = Number(document.querySelector('#edad').value)
    grasCorp = Number(document.querySelector('input[name="GrasaCorp"]:checked').value)
    actlvl = Number(document.querySelector('input[name="ActLvl"]:checked').value)
    objetivo = document.querySelector('input[name="Objetivo"]:checked').value
    percentObj = Number(document.querySelector('#percentObj').value) /100
    userCarbs = Number(document.querySelector('#userCarbs').value)
    userProts = Number(document.querySelector('#userProts').value)

    fnGenero()
    fnObjetivo()
    console.log(`Tu BMR es ${bmr}`)

    fnActLvlAMR()
    console.log(`La cantidad de kcal diarios que debes consumir son ${amr}`)
    
    fat = (amr * 0.7)/9
    carbsAverage = (userCarbs + ((amr * 0.05)/4)) / 2
    
    fnProts()
    
    protsAverage = ((userProts + prots)/2) * ((peso * (1-grasCorp)) * 2.204)
    
    console.log(`Los macros para tu dieta Keto son: ${fat} gr de Grasas, ${carbsAverage} gr de Carbohidratos y ${protsAverage} gr de Proteinas`)

    imprimirHTML()
    updateInfo_ketoUser()
    guardarStorage()
}

//      DOM
const divResultCalc = document.querySelector('.resultCalc')
const ResultTitle = document.createElement('h2')
const ResultContent = document.createElement('p')

function imprimirHTML () {
    ResultTitle.textContent = 'Estos son tus Resultados'
    ResultTitle.classList.add('pb-2')
    ResultContent.innerHTML = `Tu BMR es <strong>${bmr.toFixed(0)}</strong>. La cantidad de energia diaria que debes consumir son <strong>${amr.toFixed(0)} kCal</strong>. <br> Los macros para tu dieta Keto son: <br> <strong>${fat.toFixed(0)} gr</strong> de Grasas, <br> <strong>${carbsAverage.toFixed(0)} gr</strong> de Carbohidratos y <br> <strong>${protsAverage.toFixed(0)} gr</strong> de Proteinas <br><br> <a class="text-decoration-none fs-4 link-secondary" href="./mealplanner.html">Ir al planificador de comidas</a>`
    divResultCalc.appendChild(ResultTitle)
    divResultCalc.appendChild(ResultContent)
    divResultCalc.classList.add('px-10')
}


//      JSON - STORAGE
function updateInfo_ketoUser () {
    ketoUser.bmr = Number(bmr)
    ketoUser.amr = Number(amr)
    ketoUser.fat = Number(fat)
    ketoUser.carbs = Number(carbsAverage)
    ketoUser.prots = Number(protsAverage)
}
function guardarStorage (){
    localStorage.setItem('ketoUser', JSON.stringify(ketoUser))
}




//      FUNCIONES IF

function fnGenero() {
    if (genero == 'Mujer') { bmr =
        655.1 + (9.563 * (peso*(1-grasCorp))) + (1.850 * altura) - (4.676 * edad)
    } else if (genero == 'Hombre') { bmr =
        66.47 + (13.75 * (peso*(1-grasCorp))) + (5.003 * altura) - (6.755 * edad)
    }
}
function fnObjetivo() {
    if (objetivo == 1) {
        GainSurplus = percentObj
    } else if (objetivo == 2) {
        GainSurplus = 1
    } else if (objetivo == 3) {
        GainSurplus = percentObj + 1
    }
}
function fnActLvlAMR() {
    if (actlvl == 1) {
        amr = (bmr * 1.2) - (peso * GainSurplus / 77 * 1102)
    } else if (actlvl == 2) {
        amr = (bmr * 1.375) - (peso * GainSurplus / 77 * 1102)
    } else if (actlvl == 3) {
        amr = (bmr * 1.725) - (peso * GainSurplus / 77 * 1102)
    } else if (actlvl == 4) {
        amr = (bmr * 1.9) - (peso * GainSurplus / 77 * 1102)
    }
}
function fnProts() {
    if (actlvl == 1){
        prots = 0.7
    } else if (actlvl == 2){
        prots = 0.9
    } else if (actlvl == 3){
        prots = 1.1
    }
}