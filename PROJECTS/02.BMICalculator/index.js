/*const form = document.querySelector('form');



form.addEventListener('submit', function(e){
    e.preventDefault(); //prevent from direct submission if form

    //extracting values which are string values and parsing into integer
    const height =  parseInt(document.querySelector('#height').value);
    const weight =  parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

   

   // checks for height and weight

   if(height === " " || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
   }
   if(weight === "" || weight < 0 || isNaN(height)){
     results.innerHTML = `Please give a valid height ${weight}`;
   }


})*/
 alert("hiu")
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});