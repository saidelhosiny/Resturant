let mainNavWidth=$(".main-nav").width()


$(".menu-icon").click(function(){
    if($(".main-nav").css("left")=="0px"){
        closeNav()
        }
        else{
            $(".main-nav").animate({"left": "0px" },1000)
            $(".open-close-nav").animate({"left": mainNavWidth },1000)
            $(".menu-icon").html(`<i class="fa fa-align-justify fa-times"></i>`)
            $(".main-nav .item1").animate({"opacity": "1",paddingTop: "25px" },500,
            function(){
            $(".main-nav .item2").animate({"opacity": "1",paddingTop: "25px" },500,
            function(){
            $(".main-nav .item3").animate({"opacity": "1",paddingTop: "25px" },600,function(){

            $(".main-nav .item4").animate({"opacity": "1",paddingTop: "25px" },600,function(){
                $(".main-nav .item5").animate({"opacity": "1",paddingTop: "25px" },700)
            })
            })

            })

            })
        
        }
    })





function closeNav(){
    $(".main-nav").animate({"left": -mainNavWidth },1000)
$(".open-close-nav").animate({"left": "0px" },1000)
$(".menu-icon").html(`<i class="fa fa-align-justify"></i>`)
$(".main-nav ul li").css("padding-top", "500px" )
$(".main-nav ul li").css("opacity", "0" )
}


$(".loading-screen").fadeOut(2000)
$("body").css("overflow","visible")


let apiResopnse, 
respnseData =[]
async function getFoodApi(q){
apiResopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`)
respnseData = await apiResopnse.json()


displayFrontPage()
}

$(document).ready(function(){
    getFoodApi("A")
})

function displayFrontPage(){
   let container=""
    for (let i = 0; i <= 20; i++) {
       container+=`
       <div class="col-md-3">
       <div onclick="FilterInerdentsPage('${respnseData.meals[i].idMeal}')" class="post  position-relative">
    
           <img src="${respnseData.meals[i].strMealThumb}" class="w-100 rounded" alt="Food image">
           <div class="layer rounded position-absolute d-flex align-items-center justify-content-center  ">
               <h2>${respnseData.meals[i].strMeal}</h2>
           </div>
       </div>
   </div>` 
        
    }
    $(".main-meails .row").html(container)
 


}
 





$(".search-btn").click(function(){

    $(".loading-screen").fadeIn(1000,function(){
        $(".loading-screen").fadeOut(500,function(){
            $(".area-section").css("display","none")
            $(".catigores-parts").css("display","none")
            $(".catigories-section").css("display","none")
            $(".search-screen").css("display","block")
            $(".main-meails").css("display","none")
            $(".Front-page-ingredients").css("display","none")
            $(".ingredients-section").css("display","none")
    $(".Contact-section").css("display","none")

            
        })

    })
    

})







    
let searchValue;

let arrTwo=[]






$(".search-by-first-Name-input").keyup(function(){
    $(".Search-page-ingredients").css("display","none")
   
   
 let searchValue = $(".search-by-first-Name-input").val()
 getFoodApi(searchValue)
 $(".Front-page-ingredients").css("display","none")



 let searchResNameone=""
for (let i =0 ;i<respnseData.meals.length;i++){
    
        searchResNameone+=`<div onclick="FilterInerdentsPage('${respnseData.meals[i].idMeal}')" class="post position-relative  shadow rounded  col-md-3">
        <img src="${respnseData.meals[i].strMealThumb}" class="w-100 rounded" alt="search image">
        <div class="layer  rounded position-absolute d-flex align-items-center justify-content-center">
            <h2>${respnseData.meals[i].strMeal}</h2>
        </div>
    </div>`
        
    
        }
      
        $(".showing-search-res").html(searchResNameone)
        
    
  
})


$(".search-by-first-letter-input").keydown(function(){
  
   
    
    


  let  searchValue = $(".search-by-first-letter-input").val()
    getFoodApi(searchValue)
    $(".Front-page-ingredients").css("display","none")
   
   
    let searchResNameTwo=""
   for (let i =0 ;i<respnseData.meals.length;i++){
           searchResNameTwo+=` <div <div onclick="FilterInerdentsPage('${respnseData.meals[i].idMeal}')" class="post position-relative  shadow rounded  col-md-3">
               <img src="${respnseData.meals[i].strMealThumb}" class="w-100 rounded" alt="search image">
               <div class="layer rounded  position-absolute d-flex align-items-center justify-content-center">
                   <h2>${respnseData.meals[i].strMeal}</h2>
               </div>
           </div>`
           
       
           }
     
           $(".showing-search-res").html(searchResNameTwo)
           
       
     
   })


  
  


    let catgeoreapi
let catgeoreapiResponse=[]
let catgeoreapiResponsecat
async function callingCategory(){
 catgeoreapi= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
 catgeoreapiResponse =await catgeoreapi.json()
 catgeoreapiResponsecat= catgeoreapiResponse.categories

 
}
callingCategory()






$(".categories").click(function(){


$(".loading-screen").fadeIn(1000,function(){
    $(".loading-screen").fadeOut(500,function(){
$(".Front-page-ingredients").css("display","none")
$(".area-section").css("display","none")
$(".Contact-section").css("display","none")



$(".search-page-ingredients").css("display","none")
$(".catigores-parts").css("display","none")

$(".main-meails").css("display","none")
$(".catigories-section").css("display","block")
$(".search-screen").css("display","none")

let catirgores=""

for(let i= 0 ;i <catgeoreapiResponsecat.length;i++){
    
    
catirgores +=   `  <div class="col-md-3">
<div onclick="filterByCategory('${catgeoreapiResponsecat[i].strCategory}')"   class="category-part position-relative ">
    <img src="${catgeoreapiResponsecat[i].strCategoryThumb}" class="w-100 rounded" alt="category img">
    <div class="layer rounded position-absolute rounded text-center">
        <h2>${catgeoreapiResponsecat[i].strCategory}</h2>
        <p>${catgeoreapiResponsecat[i].strCategoryDescription.split(" ").splice(0,20).join(" ")}</p>
    </div>
</div>
</div>`

}
$(".catigories-section .row").html(catirgores)

})

})
}
)







let callingCategorylistRes;
let  callingCategorylistResJson=[]
let callingCategorylistResJsonFinal;





async function filterByCategory(q){
    callingCategorylistRes= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${q}`)
    callingCategorylistResJson= await callingCategorylistRes.json()
   callingCategorylistResJsonFinal = callingCategorylistResJson.meals
   
   displayCategorymeals()
   


}




function displayCategorymeals() {
    $(".catigores-parts").css("display","block")
    $(".Contact-section").css("display","none")

        $(".search-screen").css("display","none")
    $(".ingredients-section").css("display","none")

    $(".catigories-section").css("display","none")
    $(".main-meails").css("display","none")
    let meals = ""
    for (let i = 0; i < callingCategorylistResJsonFinal.length; i++) {
        meals += `
        <div class="col-md-3 my-3 myM  shadow">
            <div onclick="FilterInerdentsPage('${callingCategorylistResJsonFinal[i].idMeal}')"  class="movie shadow rounded ">
                <div class="post position-relative">
                    <img src='${callingCategorylistResJsonFinal[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer rounded d-flex align-items-center text-center position-absolute  ">
                        <div class="info p-2 " >
                            <h2>${callingCategorylistResJsonFinal[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
   
$(".catigores-parts .row").html(meals)
    }  
 
    let FilterIngCatRes,
    FilterIngCatResapi=[]

async function FilterInerdentsPage(q){
  FilterIngCatRes =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${q}`)
  FilterIngCatResapi = await FilterIngCatRes.json()


  displayIngerdentsPage()

}



    function displayIngerdentsPage(){
        for(let i=0;i<FilterIngCatResapi.meals.length;i++){
     
    $(".area-section").css("display","none")
    $(".Contact-section").css("display","none")
        
        $(".catigores-parts").css("display","none")
        $(".catigories-section").css("display","none")
        $(".search-screen").css("display","none")
        $(".main-meails").css("display","none")
    $(".ingredients-section").css("display","none")

        $(".Front-page-ingredients").css("display","block")
        $(" .Front-page-ingredients  img").attr("src",FilterIngCatResapi.meals[i].strMealThumb)
        $( ".Front-page-ingredients  h1").html(FilterIngCatResapi.meals[i].strMeal)
        $(".Front-page-ingredients .ingerdenits-desc > p").html(FilterIngCatResapi.meals[i].strInstructions)
        $(".Front-page-ingredients .ingerdenits-desc .area span").html(FilterIngCatResapi.meals[i].strArea)
        $(".Front-page-ingredients .ingerdenits-desc .Category span").html(FilterIngCatResapi.meals[i].strCategory)
        $(".Front-page-ingredients .buttons .source").attr("href",FilterIngCatResapi.meals[i].strSource)
        $(".Front-page-ingredients .buttons .Youtub").attr("href",FilterIngCatResapi.meals[i].strYoutube)
        let recipes=""
        
        arr=[ FilterIngCatResapi.meals[i].strIngredient1, FilterIngCatResapi.meals[i].strIngredient2,FilterIngCatResapi.meals[i].strIngredient3,FilterIngCatResapi.meals[i].strIngredient4,FilterIngCatResapi.meals[i].strIngredient5,FilterIngCatResapi.meals[i].strIngredient6,FilterIngCatResapi.meals[i].strIngredient7,FilterIngCatResapi.meals[i].strIngredient8,FilterIngCatResapi.meals[i].strIngredient9,FilterIngCatResapi.meals[i].strIngredient10,FilterIngCatResapi.meals[i].strIngredient11,FilterIngCatResapi.meals[i].strIngredient12,FilterIngCatResapi.meals[i].strIngredient213,FilterIngCatResapi.meals[i].strIngredient14,FilterIngCatResapi.meals[i].strIngredient15,FilterIngCatResapi.meals[i].strIngredient16,FilterIngCatResapi.meals[i].strIngredient17,FilterIngCatResapi.meals[i].strIngredient18,FilterIngCatResapi.meals[i].strIngredient19,FilterIngCatResapi.meals[i].strIngredient20]
        for (let j =0; j<arr.length;j++ ){
            if (arr[j]== "" ||arr[j]== undefined){
             
            }
            else{
         recipes+=  `<li class=" mx-3 alert-success p-2 rounded my-3">${arr[j]}</li> ` 
            }
            }
            $(".Front-page-ingredients .recipes-btns").html(recipes)
        
        
        }
        
    }



$(".Area").click(function(){
    $(".loading-screen").fadeIn(1000,function(){
        $(".loading-screen").fadeOut(500,function(){
            $(".Contact-section").css("display","none")

    $(".area-section").css("display","block")
    $(".catigores-parts").css("display","none")
    $(".catigories-section").css("display","none")
    $(".search-screen").css("display","none")
    $(".main-meails").css("display","none")
    $(".Front-page-ingredients").css("display","none")
    $(".ingredients-section").css("display","none")

    filterByArea()
})

})
})

let filterAreaRes,
 filterAreaResApi=[]

async function filterByArea(){
  filterAreaRes = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  filterAreaResApi = await filterAreaRes.json()
  console.log(filterAreaResApi.meals)
  displayArea()

}

function displayArea(){
    let container=""
    for(let i=0 ;i<filterAreaResApi.meals.length;i++){
        container+=`  <div class="col-md-3">
        <div onclick="filterByAreaSections('${filterAreaResApi.meals[i].strArea}')" class="post position-relative text-center">
           
                <i class="fa-solid fa-city fa-3x"></i>
            <h2 class="text-white">${filterAreaResApi.meals[i].strArea}</h2>
           
       </div>
    </div>`
    }

$(".area-section  .row").html(container)

}

let filterAreaSecRes,
 filterAreaResSecApi=[]
async function filterByAreaSections(q){
  filterAreaSecRes= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${q}`)
  filterAreaResSecApi =await  filterAreaSecRes.json()

displayAreaSections()
}

function displayAreaSections(){


    let container=""
    for(let i=0 ;i<filterAreaResSecApi.meals.length;i++){
        container+=`
        <div class="col-md-3 my-3 myM  shadow">
            <div  class="movie shadow rounded ">
                <div onclick="FilterInerdentsPage('${filterAreaResSecApi.meals[i].idMeal}')" class="post position-relative">
                    <img src='${filterAreaResSecApi.meals[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer rounded d-flex align-items-center text-center position-absolute  ">
                        <div class="info p-2 " >
                            <h2>${filterAreaResSecApi.meals[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }

$(".area-section  .row").html(container)

}
$(".ingredients").click(function(){
    $(".loading-screen").fadeIn(1000,function(){
        $(".loading-screen").fadeOut(500,function(){

            $(".Contact-section").css("display","none")


    $(".ingredients-section").css("display","block")
    $(".area-section").css("display","none")
    $(".catigores-parts").css("display","none")
    $(".catigories-section").css("display","none")
    $(".search-screen").css("display","none")
    $(".main-meails").css("display","none")
    $(".Front-page-ingredients").css("display","none")
    filterByIngredients()
})

})

})
let filterIngredientsRes,
filterIngredientsResAPi=[]

async function filterByIngredients(){
    filterIngredientsRes = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    filterIngredientsResAPi = await filterIngredientsRes.json()
  displayIngerdents()
  }


  function displayIngerdents(){
    let container=""
    for(let i=0 ;i<=20;i++){
        container+=`  <div class="col-md-3">
        <div   class="post position-relative text-center"      

onclick="filterByIngredientsSections('${filterIngredientsResAPi.meals[i].strIngredient}')"
        
        >
           
        <i class="fa-solid fa-bowl-food fa-3x"></i>
              
            <h3 class="my-2 text-white">${filterIngredientsResAPi.meals[i].strIngredient}</h3>
           <p class="text-white"> ${filterIngredientsResAPi.meals[i].strDescription.split(" ").splice(0,20).join(" ")}</P>
       </div>
    </div>`
    }

$(".ingredients-section .row").html(container)

}

let filterIngredientsSecRes,
 filterIngredientsResSecApi=[]
async function filterByIngredientsSections(q){
    filterIngredientsSecRes= await fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?i=${q}`)
    filterIngredientsResSecApi =await  filterIngredientsSecRes.json()
    displayIngredientsSections()
}

function displayIngredientsSections(){


    let container=""
    for(let i=0 ;i< filterIngredientsResSecApi.meals.length;i++){
        container+=`
        <div class="col-md-3 my-3 myM  shadow">
            <div  class="movie shadow rounded ">
                <div onclick="FilterInerdentsPage('${filterIngredientsResSecApi.meals[i].idMeal}')" class="post position-relative">
                    <img src='${filterIngredientsResSecApi.meals[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer rounded d-flex align-items-center text-center position-absolute  ">
                        <div class="info p-2 " >
                            <h2>${filterIngredientsResSecApi.meals[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }

$(".ingredients-section  .row").html(container)

}

$(".contact").click(function(){
    $(".Contact-section").css("display","block")
    $(".ingredients-section").css("display","none")
    $(".area-section").css("display","none")
    $(".catigores-parts").css("display","none")
    $(".catigories-section").css("display","none")
    $(".search-screen").css("display","none")
    $(".main-meails").css("display","none")
    $(".Front-page-ingredients").css("display","none")
})

let userName= document.querySelector(".name-input"),
userEmail=document.querySelector(".email-input"),
userPhone=document.querySelector(".phone-input"),
userAge=document.querySelector(".age-input"),
userPassword=document.querySelector(".password-input"),
userRePassword =document.querySelector(".Repassword-input")



function NameVaildation(){
    return /^[a-zA-Z]+$/.test(userName.value)
    
}

function EamilVaildation(){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)

}
function phoneVaildation(){
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)

}
function AgeVaildation(){
    return /^[1-9][0-9]?$|^100$/.test(userAge.value)


}

function PasswordValidation() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function RePasswordValidation() {
    return userPassword.value == userRePassword.value
}

let namefocused = false
let eamilfocused = false
let phonefocused = false
let agefocused = false
let passswordfocused = false
let rePassswordfocused = false



userName.addEventListener("focus",function(){
namefocused=true

})

userEmail.addEventListener( "focus",function (){ 
    eamilfocused = true
})
userPhone.addEventListener( "focus",function (){
    phonefocused = true
})
userAge.addEventListener( "focus",function (){
    agefocused = true
})

userPassword.addEventListener( "focus",function (){
    passswordfocused = true
})
userRePassword.addEventListener("focus", function (){
    rePassswordfocused = true
})


function finalValidation(){
    if (namefocused) {
       if(NameVaildation()){

        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        document.querySelector(".namealert").classList.replace("d-block","d-none") 
        
       }

        else{
           
            userName.classList.remove("is-valid")
            userName.classList.add("is-invalid")
            document.querySelector(".namealert").classList.add("d-block")
           






    
         
        }}




if (eamilfocused){

if(EamilVaildation()){

        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        document.querySelector(".emailalert").classList.replace("d-block","d-none") 
       
       }
else{
    userEmail.classList.remove("is-valid")
            userEmail.classList.add("is-invalid")
        document.querySelector(".emailalert").classList.add("d-block")
        

}

}
if (phonefocused){

    if(phoneVaildation()){
    
            userPhone.classList.remove("is-invalid")
            userPhone.classList.add("is-valid")
            document.querySelector(".phonealert").classList.replace("d-block","d-none") 
           
           }
    else{
        userPhone.classList.remove("is-valid")
                userPhone.classList.add("is-invalid")
            document.querySelector(".phonealert").classList.add("d-block")
            
    
    }
    
    }
    if (agefocused){

        if(AgeVaildation()){
        
                userAge.classList.remove("is-invalid")
                userAge.classList.add("is-valid")
                document.querySelector(".agealert").classList.replace("d-block","d-none") 
               
               }
        else{
            userAge.classList.remove("is-valid")
                    userAge.classList.add("is-invalid")
                document.querySelector(".agealert").classList.add("d-block")
                
        
        }
        
        }
        if (passswordfocused){

            if(PasswordValidation()){
            
                    userPassword.classList.remove("is-invalid")
                    userPassword.classList.add("is-valid")
                    document.querySelector(".passwordalert").classList.replace("d-block","d-none") 
                   
                   }
            else{
                userPassword.classList.remove("is-valid")
                        userPassword.classList.add("is-invalid")
                    document.querySelector(".passwordalert").classList.add("d-block")
                    
            
            }
            
            }
            if (rePassswordfocused){

                if(RePasswordValidation()){
                
                        userRePassword.classList.remove("is-invalid")
                        userRePassword.classList.add("is-valid")
                        document.querySelector(".Repasswordalert").classList.replace("d-block","d-none") 
                       
                       }
                else{
                    userRePassword.classList.remove("is-valid")
                            userRePassword.classList.add("is-invalid")
                        document.querySelector(".Repasswordalert").classList.add("d-block")
                        
                
                }
                
                }
if(NameVaildation() && EamilVaildation() && AgeVaildation() && PasswordValidation() && phoneVaildation()&& RePasswordValidation()){

document.querySelector(".submitBtn").removeAttribute("disabled")

    }
  else{
    document.querySelector(".submitBtn").setAttribute("disabled","true")

  }

}
document.querySelector(".submitBtn").addEventListener("click", function(){
   
    userName.value=""
    userEmail.value=""
    userAge.value=""
    userPhone.value=""
    userPassword.value=""
    userRePassword.value=""
})