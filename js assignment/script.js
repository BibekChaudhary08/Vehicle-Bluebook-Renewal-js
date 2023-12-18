var renewalfee = document.getElementById('Renewalfee');
var insurance = document.getElementById('insurance');
var totalcharge = document.getElementById('totalcharge');
var btn = document.getElementById('btn');
var data = document.getElementsByName('h');
var late = document.getElementById('latefee');
late.value = 0;

data.forEach((values) => {
values.addEventListener("click", () => {
if (values.checked) {
  late.value = values.value;
}
});
});


function getValue(){
if (renewalfee.value=='') {
      alert("Please Enter Yearly Renewal Fee");
    }else{
let total = parseInt(renewalfee.value)+parseInt(insurance.value)+parseInt(late.value);
totalcharge.value = total;
}
};

btn.addEventListener('click',getValue);