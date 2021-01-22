$(function(){
//      DOM

    ketoUser = JSON.parse(localStorage.getItem('ketoUser'))

    if (ketoUser == null) {
        divIntro.append(`<p class="fs-5">Recuerda calcular primero tus metas macro.</p><a class="text-decoration-none fs-4 link-light" href="calculadora.html">Ir a definir mis metas</a>`)
    }
    else if (ketoUser =! null){
        recall_ketoUser()
        HTML_ketoUser()
    }



//      AJAX

    $.ajax({
        url:'./js/recetario.json',
        success: function (data, status, xhr) {
            recetario = data
        },
        error: function (xhr, status, errorThrown) {
            console.log(xhr)
        }
    })
})

//      JQUERY


$('#mealForm').submit( function (e){
    e.preventDefault()
    userIngredient1 = $('#UserIngredient1')[0].value
    userIngredient2 = $('#UserIngredient2')[0].value
    userIngredient3 = $('#UserIngredient3')[0].value
    userIngredient4 = $('#UserIngredient4')[0].value
    selectedIngredients = [userIngredient1, userIngredient2, userIngredient3, userIngredient4]

    resultado = recetario.filter(userSel)

    $(".meal_Plan > div").hide()
    $(".meal_Plan > div").empty()

    $(".meal_Plan > div").append(
        `<h3 class="pb-3 text-center">Aqui tienes las recetas que se ajustan a tu gusto</h3>`
    )

    resultado.forEach( receta => {
        $(".meal_Plan > div").append(
            `<div class="col-12 col-md-4">
                <div class="card h-100 p-0">
                    <img src="${receta.imagen}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${receta.nombre}
                        </h5>
                        <p class="card-text">
                            ${receta.detalle}
                        </p>
                    </div>
                </div>
            </div>`
        )
    })
    
    if ($(".meal_Plan > div").first().is(":hidden")) {
        $(".meal_Plan > div").slideDown()
    }
    $('html, body').animate({
        scrollTop: $(".meal_Plan > div").offset().top
    }, 200)
    console.log(resultado)
})


const divIntro = $('.meal_Intro')


//      FUNCIONES

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


function userSel (receta) {
    return selectedIngredients.some(i => receta.ingredientes.includes(i))
}

// Funcion Vieja para filtrar segun ingredientes seleccionados por el usuario
/* function userSel (prod) {if((prod.ingrediente1 == userIngredient1 || prod.ingrediente1 == userIngredient2 || prod.ingrediente1 == userIngredient3) || (prod.ingrediente2 == userIngredient1 || prod.ingrediente2 == userIngredient2 || prod.ingrediente2 == userIngredient3) || (prod.ingrediente3 == userIngredient1 || prod.ingrediente3 == userIngredient2 || prod.ingrediente3 == userIngredient3)) {return true}} */