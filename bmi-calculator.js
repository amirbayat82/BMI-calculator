let weight_label = document.querySelector("#weight-val");
let height_label = document.querySelector("#height-val");
let finall_tag = document.querySelector('#result');
let category_label = document.querySelector('#category');
let get_weight = 20;
let get_height = 100;
let convert = 0;
function calculate(e) {
  let get_id = e.target.id;
  if (get_id === "weight") {
    weight_label.innerText = `${e.target.value} Kg`;
  } else {
    height_label.innerText = `${e.target.value} cm`;
  }

  if (get_id === "weight") {
    get_weight = e.target.value;
  }
  if (get_id === "height") {
    get_height = e.target.value;
  }
  convert = get_height / 100;
  let calc_bmi = get_weight / (convert ** 2);
  calc_bmi = Math.round(calc_bmi *10) /10;
  finall_tag.innerHTML = calc_bmi;
  if(calc_bmi < 18.5){
    finall_tag.style.cssText = 'color:yellow;';
    category_label.style.cssText = 'color:yellow;';
    category_label.innerHTML = 'You are so Low !';
  }
  else if(calc_bmi > 18.5 && calc_bmi <= 24.9){
    finall_tag.style.cssText = 'color:green;';
    category_label.style.cssText = 'color:green;';
    category_label.innerHTML = 'You are Normal !';
  }
  else if(calc_bmi > 25 && calc_bmi <=29.9){
    finall_tag.style.cssText = 'color:orange;';
    category_label.style.cssText = 'color:orange;';
    category_label.innerHTML = 'Opps ! Be more careful about Yourself !';
  }
  else if(calc_bmi > 30 && calc_bmi <=39.9){
    finall_tag.style.cssText = 'color:red;';
    category_label.style.cssText = 'color:red;';
    category_label.innerHTML = 'You are Fat !';
  }
  else{
    finall_tag.style.cssText = 'color:#000;';
    category_label.style.cssText = 'color:#000;';
    category_label.innerHTML = 'You have been fucked  !';
  }
}
