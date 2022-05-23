
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    console.log(value);
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    console.log(value);
}

function addToCart() {
    a = document.getElementById('shopping-cart');
    a.setAttribute("data", document.getElementById('number').value);
    console.log(a.getAttribute("data"));
}

function changeImage(productSmallImg) {
    var productFullImg = document.getElementById("img");
    productFullImg.src = productSmallImg.src;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function displayShoppingCart() {
    var num1 = document.getElementById("shopping-cart");
    var num = num1.getAttribute("data");
    if(num == 0){
        document.getElementById("myDropdown-2").classList.toggle("show");
    } else {
        document.getElementById("myDropdown").classList.toggle("show");
        var result = 125.00 * num;
        document.getElementById("item-price").innerHTML = `$125.00 x ${num} = $${result}`;
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.shopping-cart')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}