
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (window.innerWidth >= "991") {
        if (document.body.scrollTop > 4500 || document.documentElement.scrollTop > 4500) {
            document.getElementById("Homeactive").style.color = ""
            document.getElementById("Aboutactive").style.color = ""
            document.getElementById("Menuactive").style.color = ""
            document.getElementById("Galleryactive").style.color = "red"
        }
        else if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            document.getElementById("Homeactive").style.color = ""
            document.getElementById("Aboutactive").style.color = ""
            document.getElementById("Menuactive").style.color = "red"
            document.getElementById("Galleryactive").style.color = ""
        }

        else if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("Homeactive").style.color = ""
            document.getElementById("Aboutactive").style.color = "red"
            document.getElementById("Menuactive").style.color = ""
            document.getElementById("Galleryactive").style.color = ""
        }

        else {
            document.getElementById("Homeactive").style.color = "red"
            document.getElementById("Aboutactive").style.color = ""
            document.getElementById("Menuactive").style.color = ""
            document.getElementById("Galleryactive").style.color = ""
        }
    }
    else if (window.innerWidth >= "767") {
        if (document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000) {
            document.getElementById("Homeactivem").style.color = ""
            document.getElementById("Aboutactivem").style.color = ""
            document.getElementById("Menuactivem").style.color = ""
            document.getElementById("Galleryactivem").style.color = "red"
        }
        else if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            document.getElementById("Homeactivem").style.color = ""
            document.getElementById("Aboutactivem").style.color = ""
            document.getElementById("Menuactivem").style.color = "red"
            document.getElementById("Galleryactivem").style.color = ""
        }

        else if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("Homeactivem").style.color = ""
            document.getElementById("Aboutactivem").style.color = "red"
            document.getElementById("Menuactivem").style.color = ""
            document.getElementById("Galleryactivem").style.color = ""
        }

        else {
            document.getElementById("Homeactivem").style.color = "red"
            document.getElementById("Aboutactivem").style.color = ""
            document.getElementById("Menuactivem").style.color = ""
            document.getElementById("Galleryactivem").style.color = ""
        }
    }
    else if (window.innerWidth <= "766") {
        if (document.body.scrollTop > 9000 || document.documentElement.scrollTop > 9000) {
            document.getElementById("Homeactivem").style.color = ""
            document.getElementById("Aboutactivem").style.color = ""
            document.getElementById("Menuactivem").style.color = ""
            document.getElementById("Galleryactivem").style.color = "red"
        }
        else if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
            document.getElementById("Homeactivem").style.color = ""
            document.getElementById("Aboutactivem").style.color = ""
            document.getElementById("Menuactivem").style.color = "red"
            document.getElementById("Galleryactivem").style.color = ""
        }

        else if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("Homeactivem").style.color = ""
            document.getElementById("Aboutactivem").style.color = "red"
            document.getElementById("Menuactivem").style.color = ""
            document.getElementById("Galleryactivem").style.color = ""
        }

        else {
            document.getElementById("Homeactivem").style.color = "red"
            document.getElementById("Aboutactivem").style.color = ""
            document.getElementById("Menuactivem").style.color = ""
            document.getElementById("Galleryactivem").style.color = ""
        }
    }

    else {
        console.log("Error in optemizing screen width");
    }
}

function shownavbar() {
    var mnavbar = document.getElementById("mobilenavbar");

    if (mnavbar.style.marginLeft == "") {
        mnavbar.style.marginLeft = "-600px";
    }
    else {
        mnavbar.style.marginLeft = ""
    }

}
function opencart() {
    if (document.getElementById("cartbox").style.marginRight == "0px") {
        document.getElementById("cartbox").style.marginRight = "-300px";

    }
    else {
        document.getElementById("cartbox").style.marginRight = "0px";
        document.getElementById("mobilenavbar").style.marginLeft = "-600px";
    }

}
function closecart() {
    document.getElementById("cartbox").style.marginRight = "-300px";
}
$(document).ready(function () {

    typing(0, $('.typewriter-text').data('text'));

    function typing(index, text) {

        var textIndex = 1;

        var tmp = setInterval(function () {
            if (textIndex < text[index].length + 1) {
                $('.typewriter-text').text(text[index].substr(0, textIndex));
                textIndex++;
            } else {
                setTimeout(function () { deleting(index, text) }, 2000);
                clearInterval(tmp);
            }

        }, 150);

    }

    function deleting(index, text) {

        var textIndex = text[index].length;

        var tmp = setInterval(function () {

            if (textIndex + 1 > 0) {
                $('.typewriter-text').text(text[index].substr(0, textIndex));
                textIndex--;
            } else {
                index++;
                if (index == text.length) { index = 0; }
                typing(index, text);
                clearInterval(tmp);
            }

        }, 150)

    }

});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            document.getElementById('navbartop').classList.add('fixed-top');

        } else {
            document.getElementById('navbartop').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

function showmenu() {
    document.getElementById("deals").style.display = "none";
    document.getElementById("menu").style.display = "";
}
function showdeals() {
    document.getElementById("deals").style.display = "";
    document.getElementById("menu").style.display = "none";
}

/* get cart total from session on load */
updateCartTotal();

/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () { addToCart(this); });

}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
    var stringCart;
    //cycles siblings for product info near the add button
    while (elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if (elem.className == "price") {
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
    }
    //create product object
    var product = {
        productname: getproductName,
        price: getprice
    };
    //convert product data to JSON for storage
    var stringProduct = JSON.stringify(product);
    /*send product data to session storage */

    if (!sessionStorage.getItem('cart')) {
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
    else {
        //get existing cart data from storage and convert back into array
        cart = JSON.parse(sessionStorage.getItem('cart'));
        //append new product JSON object
        cart.push(stringProduct);
        //cart back to JSON
        stringCart = JSON.stringify(cart);
        //overwrite cart data in sessionstorage 
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
}
/* Calculate Cart Total */
function updateCartTotal() {
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";

    if (sessionStorage.getItem('cart')) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        items = cart.length;
        for (var i = 0; i < items; i++) {
            var x = JSON.parse(cart[i]);
            price = parseFloat(x.price.split('$')[1]);
            productname = x.productname;
            carttable += "<h1>" + productname + "</h1><h2>$" + price.toFixed(2) + "</h2>";
            total += price;

        }


    }
    discountedtotal = total - (total * 10 / 100);
    document.getElementById("itemsnumbers").innerHTML = items;
    document.getElementById("itemsnumbersm").innerHTML = items;
    document.getElementById("total").innerHTML = total.toFixed(3);
    document.getElementById("carttable").innerHTML = carttable;
    document.getElementById("itemsquantity").innerHTML = items;
    document.getElementById("discountedtotal").innerHTML = discountedtotal.toFixed(3);


}

function addedToCart(pname) {
    var message = "<b>" + pname + "</b>" + " Sucessfully added to your Cart";
    var alerts = document.getElementById("alerts");
    alerts.innerHTML = message;
    if (!alerts.classList.contains("message")) {
        alerts.classList.add("message");
    }
}
/* User Manually empty cart */
function emptyCart() {
    if (sessionStorage.getItem('cart')) {
        sessionStorage.removeItem('cart');
        updateCartTotal();
    }
}
function showMessage() {
    document.getElementById("alerts").classList.add("show");
    setTimeout(hideMessage, 4000)
    function hideMessage() {
        document.getElementById("alerts").classList.remove("show");
    }
}

function callfororder() {
    document.getElementById("callnow").style.display="";
   
}
function closephone() {
    document.getElementById("callnow").style.display="none";
}

function  hidenavbar(){
    document.getElementById("mobilenavbar").style.marginLeft="-300px";
}