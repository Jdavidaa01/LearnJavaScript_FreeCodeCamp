const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput= document.getElementById("budget");
const entryDropdown= document.getElementById("entry-dropdown");
const addEntryButton= document.getElementById("add-entry");
const clearButton= document.getElementById("clear");
const output= document.getElementById("output");
let isError =false;
function cleanInputString(str){
    // Se usa regex para union de cadenas
  //  console.log("originl string: ",str);
    const regex=/[+-\s]/g;
    return str.replace(regex,"");
}
//console.log(cleanInputString("+-99"));const entryNumber = targetInputContainer.querySelectorAll();
function isInvalidInput(str){
    const regex= /\d+e\d+/i;
    return str.match(regex);
}
function addEntry(){
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
  const HTMLString=`<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
  
  `;
  targetInputContainer.insertAdjacentHTML("beforeend",HTMLString) ;
}   
//end build  dynamic HTML
addEntryButton.addEventListener('click',addEntry);
function getCaloriesFromInputs(list){
  let calories=0;
  for(const item of list){
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch){
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError=true;
      return null;
    }
    calories+= Number(currVal);
  }
  return calories;
  
}
function calculateCalories(e) {
  e.preventDefault();
  isError=false;
  let breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
}