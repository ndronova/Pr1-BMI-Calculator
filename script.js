// EVENT LISTENERS

// listening to submit
document.getElementById('bmi-form').addEventListener('submit', function(e){
  calculateBmi();

  event.preventDefault();
})

//listening to reset
document.getElementById('bmi-form').addEventListener('reset', function(e){
  emptyFields();
  deleteAlerts();
})

 
function calculateBmi(){

   // assign inputs to variables
   const height1=document.getElementById('height1').value;
   const weight1=document.getElementById('weight1').value;
   const height2=document.getElementById('height2').value;
   const weight2=document.getElementById('weight2').value;
   const name1=document.getElementById('name1').value;
   const name2=document.getElementById('name2').value;

  //calculate bmi
  const bmi1=(weight1/(height1*height1)*10000).toFixed(2);
  const bmi2=(weight2/(height2*height2)*10000).toFixed(2);

  // VALIDATE NUMBERS
  if (bmi1<15 || bmi1> 40) {

    showError(name1);
  } else if (bmi2<15 || bmi2 >40) {
    showError(name2);
  };

  showBmi();

    //show result
    function showBmi() {
      //create new div element
      console.log(bmi1);
      var bmiResult=document.createElement('div');
      var bmiResultText=document.createTextNode(`${name1}'s BMI is ${bmi1}. ${name2}'s BMI is ${bmi2} `);

      //add text to new div element
      bmiResult.appendChild(bmiResultText);

      //create a reference node
      var referenceNode=document.getElementById("bmi-form");

      //add child to the dom
      document.body.appendChild(bmiResult);

      //add styling
      bmiResult.classList.add('alert', 'alert-success', 'result', 'col-md-6');

      //whose is bigger?
      if (bmi1>bmi2) {
        addElement('higher');
      } else {
        addElement('lower');
      }
  }
}


function addElement(comp) {
  //create new div element
  var uiResult = document.createElement("div");
  var uiResultText=document.createTextNode(`${name1.value}'s BMI is ${comp} than ${name2.value}'s`);
 
  //add text to new div element
  uiResult.appendChild(uiResultText);

  // //create a reference node
  var referenceNode=document.getElementById('bmiREsult');

  //add newly created element into the dom
  // referenceNode.after(uiResult);
  document.body.appendChild(uiResult);

  //add styling
  uiResult.classList.add("alert", "alert-primary", 'result', 'col-md-6'); 
}

function showError(name) {
    //create new div element
    var uiResult = document.createElement("div");
    var uiResultText=document.createTextNode(` Please, check ${name}'s numbers`);
   
    //add text to new div element
    uiResult.appendChild(uiResultText);
  
    // //create a reference node
    var referenceNode=document.getElementById('bmiREsult');
  
    //add newly created element into the dom
    // referenceNode.after(uiResult);
    document.body.appendChild(uiResult);
  
    //add styling
    uiResult.classList.add("alert", "alert-danger", 'result', 'col-md-6'); 
}

//emptying fields
function emptyFields() {
 document.getElementById('bmi-form').reset();
};

//deleting alerts
function deleteAlerts() {
   //checking if there is anything to delete
   var alert = document.querySelectorAll('.result');
   if (alert.length >0) {
     //querySelectorAll().remove() says remove is not a function => use for loop
     for (var i=0; i< alert.length; i++) {
       alert[i].remove();
     }
   }
}