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

let recetario = [receta1, receta2, receta3, receta4]

//      JQUERY

$('#mealForm').submit( function (e){
    e.preventDefault()
    userIngredient1 = $('#UserIngredient1')[0].value
    userIngredient2 = $('#UserIngredient2')[0].value
    userIngredient3 = $('#UserIngredient3')[0].value
    userIngredient4 = $('#UserIngredient4')[0].value

    resultado = recetario.filter(userSel)
    console.log(resultado)
})

//      DOM

$(function(){
    ketoUser = JSON.parse(localStorage.getItem('ketoUser'))
    recall_ketoUser()
    HTML_ketoUser()
})

const divIntro = $('.meal_Intro')

function recall_ketoUser () {
    amr = ketoUser.amr
    bmr = ketoUser.bmr
    fat = ketoUser.fat
    carbs = ketoUser.carbs
    prots = ketoUser.prots
}

function HTML_ketoUser () {
    divIntro.append(`<p class="fs-5">Segun los calculos realizados previamente tus datos son:<br><br>Cantidad de energia diaria necesaria: <strong>${amr.toFixed(0)} kCal</strong>. <br><br> Macros: <br> <strong>${fat.toFixed(0)} gr</strong> de Grasas, <br> <strong>${carbs.toFixed(0)} gr</strong> de Carbohidratos y <br> <strong>${prots.toFixed(0)} gr</strong> de Proteinas</p>`)
}



function userSel (prod) {if((prod.ingrediente1 == userIngredient1 || prod.ingrediente1 == userIngredient2 || prod.ingrediente1 == userIngredient3) || (prod.ingrediente2 == userIngredient1 || prod.ingrediente2 == userIngredient2 || prod.ingrediente2 == userIngredient3) || (prod.ingrediente3 == userIngredient1 || prod.ingrediente3 == userIngredient2 || prod.ingrediente3 == userIngredient3)) {return true}}