function register(){
    var nameFromHtml = document.getElementById("name");
    if(nameFromHtml){
        var name = nameFromHtml.value;
        console.log(name);
    }

    var emailFromHtml = document.getElementById("email");
    if(emailFromHtml){
        var email = emailFromHtml.value;
        console.log(email);
    }

    var passwordFromHtml = document.getElementById("password");
    if(passwordFromHtml){
        var password = passwordFromHtml.value;
        console.log(password);
    }

    if(name&&email&&password){
        localStorage.setItem("userData",JSON.stringify({nameOfUser:name, emailOfUser:email, passwordOfUser:password}));
        localStorage.setItem("isUserLoggedIn","false");
        alert("Register done!");
        window.location.href= "./login.html";
    } 
    else {
        alert("error:-write all feilds..")
    }

}
function login(){
    var emailFromHtml = document.getElementById("email");
    if(emailFromHtml){
       var emailFromLogin = emailFromHtml.value;
       console.log(emailFromLogin)
    }

    var passwordFromHtml = document.getElementById("password");
    if(passwordFromHtml){
       var passwordFromLogin = passwordFromHtml.value;
       console.log(passwordFromLogin)
    }

    if(emailFromLogin && passwordFromLogin){
        var dataFromLocal = localStorage.getItem("userData");
        var parseData = JSON.parse(dataFromLocal);
        console.log(parseData.emailOfUser,"parsedData.emailOfUser");
        if(emailFromLogin == parseData.emailOfUser && passwordFromLogin == parseData.passwordOfUser)
           localStorage.setItem("isUserLoggedIn","true");
           alert("Login successfull")
        window.location.href= "./homepage.html";
    } 
    else {
        alert("wrong cred!");
    }

    
}


function addToCart(proId){
//    alert("Adding to cart");
   console.log(proId,"proId")
   var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
   console.log(existingProducts)
   if(existingProducts == null){existingProducts=[]}

   var proPs = proId.querySelectorAll("p");
   var proName = proPs[0].innerText;
//    console.log(proName,"proName")
   var proImg = proId.querySelector("img").src;
   var proPrice = proPs[2].innerText;
//    console.log(proPrice)
   var proObj = {pN:proName, pP:proPrice, pI:proImg}
   existingProducts.push(proObj);
   localStorage.setItem("allProducts",JSON.stringify(existingProducts))
   alert("Product added !")
}
 