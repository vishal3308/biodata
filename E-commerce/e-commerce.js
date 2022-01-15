//-------------------Menu Toggle---------------
let menuitem = document.getElementById(`menulist`);
menuitem.style.maxHeight = `0px`;
function toggle() {
    if (menuitem.style.maxHeight == `0px`) {
        menuitem.style.maxHeight = `200px`;
    }
    else {
        menuitem.style.maxHeight = `0px`;
    }
}



// Quantity java script
let target = document.querySelectorAll(`input`);
let a = document.getElementsByClassName(`price`);
let yes = 0;


// Cart page Java Script
// When refresh the page default value
function test() {
    let total = 0;
    for (n = 0; n < a.length; n++) {
        let data = document.querySelectorAll(`.price`)[n];
        data = data.innerText;
        data = parseFloat(data.replace(`₹`, ``));
        total = total + data;
    }
    let subtotal = document.querySelectorAll(`.totallist`)[1].children[0];
    subtotal.innerText = `₹` + String(total);
    let Alltotal = document.querySelectorAll(`.totallist`)[1].children[2];
    if (total < 1000) {
        total = total + 50;
        total = String(total);
        Alltotal.innerText = `₹` + total;
        document.querySelectorAll(`.totallist`)[1].children[1].innerText = `₹50`;
    }
    else {
        document.querySelectorAll(`.totallist`)[1].children[1].innerText = `₹0`;
        total = String(total);
        Alltotal.innerText = `₹` + total;
    }
};
test();
let nexttarget;
//------------------
// Remnove item from cart
table = document.querySelectorAll(`table a`);
Array.from(table).forEach(function (target) {
    target.addEventListener("click", function (e) {
        let ancer = e.target;
        ancer = ancer.parentElement.parentElement.parentElement;
        let medium = ancer.parentElement;
        medium.removeChild(ancer);
        nexttarget = document.querySelectorAll(`input`);
        a = document.getElementsByClassName(`price`);
        test();
        yes = 1;
        return nexttarget;
    });
});
// console.log(nexttarget);
// Updatimg the cart page
let store = new Array;
for (let n = 0; n < target.length; n++) {
    store[n] = a[n].innerText;
}

function update() {
    if (yes == 1) {
        for (let n = 0; n < nexttarget.length; n++) {
            let input = document.querySelectorAll(`input`)[n].value;
            input = parseInt(input);
            let b = store[n];
            change = parseFloat(b.replace(`₹`, ``));
            change = input * change;
            change = String(change);
            a[n].innerText = `₹` + change;
        }
        // Cart page Java Script
        total = 0;
        for (n = 0; n < a.length; n++) {
            let data = document.querySelectorAll(`.price`)[n];
            data = data.innerText;
            data = parseFloat(data.replace(`₹`, ``));
            total = total + data;
        }
        subtotal = document.querySelectorAll(`.totallist`)[1].children[0];
        subtotal.innerText = `₹` + String(total);
        Alltotal = document.querySelectorAll(`.totallist`)[1].children[2];
        if (total < 1000) {
            total = total + 50;
            total = String(total);
            Alltotal.innerText = `₹` + total;
        }
        else {
            document.querySelectorAll(`.totallist`)[1].children[1].innerText = `₹0`;
            total = String(total);
            Alltotal.innerText = `₹` + total;
        }

    }
    else {
        for (let n = 0; n < target.length; n++) {
            let input = document.querySelectorAll(`input`)[n].value;
            input = parseInt(input);
            let b = store[n];
            change = parseFloat(b.replace(`₹`, ``));
            change = input * change;
            change = String(change);
            a[n].innerText = `₹` + change;
        }
        // Cart page Java Script
        total = 0;
        for (n = 0; n < a.length; n++) {
            let data = document.querySelectorAll(`.price`)[n];
            data = data.innerText;
            data = parseFloat(data.replace(`₹`, ``));
            total = total + data;
        }
        subtotal = document.querySelectorAll(`.totallist`)[1].children[0];
        subtotal.innerText = `₹` + String(total);
        Alltotal = document.querySelectorAll(`.totallist`)[1].children[2];
        if (total < 1000) {
            total = total + 50;
            total = String(total);
            Alltotal.innerText = `₹` + total;
        }
        else {
            document.querySelectorAll(`.totallist`)[1].children[1].innerText = `₹0`;
            total = String(total);
            Alltotal.innerText = `₹` + total;
        }
    }
}
