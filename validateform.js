
let txt = document.querySelector("#username");
let pwd = document.querySelector("#password");

let formArr = [txt, pwd];

// this function will validate the form

/*

in function validateForm,
(mandatory) formElements is an array which contains all the input elements
(optional) errorFunction is a custom function made by the developer to run to show an error

*/

function validateForm(formElements, errorFunction){
    let errors = []; // this is the array which will count the elemnts which have error

    if(formElements.constructor == Array){
        for(let i = 0;i < formElements.length;i++){
            if(formElements[i].value.trim() == ""){
                // the value is trimmed and finding if any empty space is there
                // if found, then it will be put in the array of errors
                errors.push(formElements[i].name);

            }
        }

        if(errors.length != 0){
            // if error array has some elements that have array then errorFunction will be called (if given)
            if(errorFunction == null){
                alert(`Please fill all the incomplete details in ${errors}`);
                
            }
            else{
                console.log(errorFunction);
                errorFunction();
            }
        }
      
    }
    else{
        throw new Error( formElements + " is not an array");
    }
}


validateForm("formArr");
