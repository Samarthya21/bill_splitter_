let N_Non_Veg = document.querySelector('#N_Non_Veg');
let N_Veg = document.querySelector('#N_Veg');
let M_Non_Veg = document.querySelector('#M_Non_Veg');
let M_Veg = document.querySelector('#M_Veg');
let M_Cold = document.querySelector('#M_Cold');
let submit1=document.querySelector('#submit1');
var b=false;

// Handle number changes
N_Non_Veg.addEventListener('input', function () {
    // As a string
    let val1 = N_Non_Veg.value;

    // As a number
    let valAsNumber_N_Non_Veg = parseFloat(N_Non_Veg.value);

    // Perform calculations and actions
    calculateValues();
});

N_Veg.addEventListener('input', function () {
    // As a string
    let val2 = N_Veg.value;

    // As a number
    let valAsNumber_N_Veg = parseFloat(N_Veg.value);

    // Perform calculations and actions
    calculateValues();
});

M_Non_Veg.addEventListener('input', function () {
    // As a string
    let val3 = M_Non_Veg.value;

    // As a number
    let valAsNumber_M_Non_Veg = parseFloat(M_Non_Veg.value);

    // Perform calculations and actions
    calculateValues();
});

M_Veg.addEventListener('input', function () {
    // As a string
    let val4 = M_Veg.value;

    // As a number
    let valAsNumber_M_Veg = parseFloat(M_Veg.value);

    // Perform calculations and actions
    calculateValues();
});

M_Cold.addEventListener('input', function () {
    // As a string
    let val5 = M_Cold.value;

    // As a number
    let valAsNumber_M_Cold = parseFloat(M_Cold.value);

    // Perform calculations and actions
    calculateValues();
});
submit1.addEventListener('click',function(){

    b=true;
    calculateValues();
   
})


function calculateValues() {
    // Retrieve the current values
    let valAsNumber_N_Non_Veg = parseFloat(N_Non_Veg.value);
    let valAsNumber_N_Veg = parseFloat(N_Veg.value);
    let valAsNumber_M_Non_Veg = parseFloat(M_Non_Veg.value);
    let valAsNumber_M_Veg = parseFloat(M_Veg.value);
    let valAsNumber_M_Cold = parseFloat(M_Cold.value);

    // Calculate the 'cold_each' value using the retrieved variables
    let cold_each = valAsNumber_M_Cold / (valAsNumber_N_Veg + valAsNumber_N_Non_Veg);

    // Perform further calculations or actions
    var total_Non = (valAsNumber_M_Non_Veg / valAsNumber_N_Non_Veg) + cold_each;
    var total_veg = (valAsNumber_M_Veg / valAsNumber_N_Veg) + cold_each;
    if(b===true){
        var n=document.querySelector(".result_N");
        n.innerHTML="Each Non-Veg Person should pay"+total_Non;
        var v=document.querySelector(".result_V");
        v.innerHTML="Each Veg Person should pay "+total_veg;
    }
    
}


