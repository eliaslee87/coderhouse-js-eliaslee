//      FUNCION CREADORA OBJETO

function Receta(nombre, ingrediente1, ingrediente2, ingrediente3, comida, tiempo, detalle) {
    this.nombre = nombre
    this.ingrediente1 = ingrediente1
    this.ingrediente2 = ingrediente2
    this.ingrediente3 = ingrediente3
    this.comida = comida
    this. tiempo = tiempo
    this.detalle = detalle
}

//      OBJETOS RECETA
let receta1 = new Receta(
    'Estofado de carne',
    //['Carne', 'Aceite de Oliva', 'Hongos Portobellos', 'Cebolla', 'Zanahoria', 'Apio', 'Ajo', 'Pure de Tomate', 'Romero', 'Tomillo'],
    'Carne',
    'Hongos Portobello',
    'Cebolla',
    'Principal',
    120,
    'Detalle',
)

let receta2 = new Receta(
    'Repollo relleno',
    //['Repollo', 'Tomates', 'Vinagre de Manzana', 'Aji Molido', 'Cebolla en Polvo', 'Ajo en Polvo', 'Oregano', 'Aceite de Oliva', 'Carne', 'Cerdo', 'Coliflor', 'Cebolla', 'Perejil'],
    'Carne',
    'Cebolla',
    'Perejil',
    'Principal',
    120,
    'Detalle',
)

let receta3 = new Receta(
    'Pan de ajo Keto',
    //['Harina de Almendras', 'Polvo para Hornear', 'Vinagre de Manzana', 'Huevo', 'Ajo', 'Manteca', 'Perejil'],
    'Harina Almendras',
    'Huevo',
    'Manteca',
    'Postre',
    90,
    'Detalle',
)

let receta4 = new Receta(
    'Cheesecake Keto',
    //['Harina de Almendras', 'Harina de Coco', 'Manteca', 'Queso Crema', 'Stevia', 'Extracto de Vainilla', 'Huevo'],
    'Harina Almendras',
    'Manteca',
    'Queso Crema',
    'Postre',
    480,
    'Detalle',
)

let recetario = []
recetario.push(receta1)
recetario.push(receta2)
recetario.push(receta3)
recetario.push(receta4)

//      EVENTOS

const form_Meal = document.querySelector("#mealForm")

form_Meal.addEventListener('submit', ingredientesSubmit,)

/* let userIngredient1 = ''
let userIngredient2 = ''
let userIngredient3 = ''
let userIngredient4 = '' */

function ingredientesSubmit(e){
    e.preventDefault()
    userIngredient1 = document.querySelector('#UserIngredient1').value
    userIngredient2 = document.querySelector('#UserIngredient2').value
    userIngredient3 = document.querySelector('#UserIngredient3').value
    userIngredient4 = document.querySelector('#UserIngredient4').value
    
    let resultado = recetario.filter(userSel)
    console.log(resultado)
}

//      DOM
document.addEventListener('DOMContentLoaded', () => {
    ketoUser = JSON.parse(localStorage.getItem('ketoUser'))
    recall_ketoUser()
    HTML_ketoUser()
})

const divIntro = document.querySelector('.meal_Intro')
const textKetoUser = document.createElement('p')

function recall_ketoUser () {
    amr = ketoUser.amr
    bmr = ketoUser.bmr
    fat = ketoUser.fat
    carbs = ketoUser.carbs
    prots = ketoUser.prots
}

function HTML_ketoUser () {
    textKetoUser.innerHTML = `Segun los calculos realizados previamente tus datos son:<br><br>Cantidad de energia diaria necesaria: <strong>${amr.toFixed(0)} kCal</strong>. <br><br> Macros: <br> <strong>${fat.toFixed(0)} gr</strong> de Grasas, <br> <strong>${carbs.toFixed(0)} gr</strong> de Carbohidratos y <br> <strong>${prots.toFixed(0)} gr</strong> de Proteinas`
    divIntro.appendChild(textKetoUser)
    divIntro.children[3].classList.add('fs-5')
}


//      FUNCION BUSQUEDA

function userSel (prod) {if((prod.ingrediente1 == userIngredient1 || prod.ingrediente1 == userIngredient2 || prod.ingrediente1 == userIngredient3) || (prod.ingrediente2 == userIngredient1 || prod.ingrediente2 == userIngredient2 || prod.ingrediente2 == userIngredient3) || (prod.ingrediente3 == userIngredient1 || prod.ingrediente3 == userIngredient2 || prod.ingrediente3 == userIngredient3)) {return true}}
