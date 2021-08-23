let pricesViews = [{
    price: 8,
    views: "10K"
}, {
    price: 12,
    views: "50K"
}, {
    price: 16,
    views: "100K"
}, {
    price: 24,
    views: "500K"
}, {
    price: 36,
    views: "1M"
}];
let amount = document.getElementById("amount");
let amountSmall = document.getElementById("amount-sm")
let views = document.getElementById("number-vw");
let toggleBtn = document.getElementById("toggle");
let inner = document.getElementById("inner-circle");
let periodSpan = document.getElementById("period");
let periodSmall = document.getElementById("period-sm");
let slider = document.getElementById("slider")

function change(elem) {
    // calculate value to change background color of range
    var valueGradient = (elem.value - elem.min) / (elem.max - elem.min) * 100;
    elem.style.background = 'linear-gradient(to right, var(--SoftCyan) 0%,  var(--SoftCyan) ' + valueGradient + '%, var(--LightGrayishBlue)' + valueGradient + '%, var(--LightGrayishBlue) 100%)';
    // check if yearly is toggled
    let discount = inner.classList.contains("yearly") ? true : false;
    let period = inner.classList.contains("yearly") ? "/year" : "/month";

    // put value, page and period on the screen
    pricesViews.forEach((item) => {
        if (item.price == elem.value) {
            // if toggle is on yearly calculate 75% of the price
            let price = discount ? item.price * 9 : item.price;
            // put values on the screen
            amountSmall.innerHTML = price.toFixed(2);
            amount.innerHTML = price.toFixed(2);
            periodSpan.innerHTML = period;
            periodSmall.innerHTML = period;
            views.innerHTML = item.views;
        };
    })
}

toggleBtn.addEventListener("click", function () {
    inner.classList.toggle("yearly");
    change(slider)
});

