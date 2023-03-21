

const height = document.querySelector(".height");

const weight = document.querySelector(".weight");

const btn = document.querySelector(".calculate")

const bmiNumber = document.querySelector(".bmi-number")

const bmiState = document.querySelector(".bmi-state")


btn.addEventListener("click",function() {
    const bmi = Number(weight.value) / (Number(height.value)/10**2)
    console.log(bmi)

    height.value = "";
    weight.value ="";
    bmiNumber.textContent =bmi.toFixed(2);

    if (bmi <18) {
        bmiState.textContent = "Suy Dinh Dưỡng"
    } else if (bmi <=25) {
        bmiState.textContent = "Bình Thường"
    } else {
        bmiState.textContent = "Béo Phì"
        
    }
})

