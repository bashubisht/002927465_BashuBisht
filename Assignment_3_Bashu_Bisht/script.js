const addNewRow = () => {
  var myTable = document.getElementById("myTable");
  var tBody = myTable.lastElementChild;
  var lastRowIndex = myTable.lastElementChild.childElementCount;
  var allRows = document.getElementsByTagName("tr");
  var lastStudentRow = allRows[allRows.length - 2];
  var lastStudentTd = lastStudentRow.getElementsByTagName("td")[1];

  var lastStudentIndex = lastStudentTd.innerHTML.split(" ")[1];

  var newRow = document.createElement("tr");
  var tD1 = document.createElement("td");
  tD1.innerHTML=
    '<input type="checkbox" onClick="onCheckBoxClick(this)" /><br /><br /><img onClick="onArrowClick(this)" src="down.png" width="25px" />';
  var tD2 = document.createElement("td");
  tD2.innerHTML = "Student " + (parseInt(lastStudentIndex) + 1);

  var tD3 = document.createElement("td");
  tD3.innerHTML = "Teacher " + (parseInt(lastStudentIndex) +1);

  var tD4 = document.createElement("td");
  tD4.innerHTML = awardStatus[Math.floor(Math.random() * 3)]

  var tD5 = document.createElement("td");
  tD5.innerHTML = semesters[Math.floor(Math.random() * 3)] ;

  var tD6 = document.createElement("td");
  tD6.innerHTML = "TA" ;
  
  var tD7 = document.createElement("td");
  tD7.innerHTML = Math.floor((Math.random() * 100000) + 10000);

  var tD8 = document.createElement("td");
  tD8.innerHTML = "100 %";

  newRow.appendChild(tD1);
  newRow.appendChild(tD2);
  newRow.appendChild(tD3);
  newRow.appendChild(tD4);
  newRow.appendChild(tD5);
  newRow.appendChild(tD6);
  newRow.appendChild(tD7);
  newRow.appendChild(tD8);

  tBody.appendChild(newRow);

  var newRow2 = document.createElement("tr");
  var newTD1 = document.createElement("td");
  newTD1.colSpan=8;
  newTD1.innerHTML = "Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> \
			Budget Number: <br /> \
			Tuition Number: <br /> \
			Comments:<br /><br /><br /> \
			Award Status:<br /><br /><br />";

  // var newTD2 = document.createElement("td");

  newRow2.appendChild(newTD1);
  // newRow2.appendChild(newTD2);
  newRow2.classList.add("dropDownTextArea");
  newRow2.classList.add("hidden");
  tBody.appendChild(newRow2);

  alert("New Record Added Sucessfully")
  
}

const semesters = ['Fall', 'Spring', 'Summer'];

const awardStatus = ['Approved', 'Pending', 'Withdrawn'];

function onCheckBoxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;

  if(checkbox.checked == true){
  
    rowSelect.classList.add("selectedRow");
    var tD9 = document.createElement("td");
    tD9.innerHTML = '<button id="delete" type= "button" onclick="deleteRow(this)">Delete </button>'; ;

    var tD10 = document.createElement("td");
    tD10.innerHTML = '<button id="edit" type= "button" onclick="editRow(this)">Edit </button>';
  
    rowSelect.appendChild(tD9);
    rowSelect.appendChild(tD10);

    if(rowSelect.nextElementSibling.childElementCount == 1) {
      var newTD2 = document.createElement("td");
      rowSelect.nextElementSibling.appendChild(newTD2);
      var newTD3 = document.createElement("td");
      rowSelect.nextElementSibling.appendChild(newTD3);
    } 

  }
  else {
    rowSelect.classList.remove("selectedRow");
    rowSelect.lastElementChild.remove();
    rowSelect.lastElementChild.remove();
    
    if(rowSelect.nextElementSibling.classList.contains("hidden") == false) {
      rowSelect.nextElementSibling.lastElementChild.remove();
      rowSelect.nextElementSibling.lastElementChild.remove();
    }
  
  }

  var allInputs = document.getElementsByTagName("input");
  var allCheckBoxInputs = [];
  for (var i = 0; i < allInputs.length; i++){
    if (allInputs[i].type === 'checkbox') {
      allCheckBoxInputs.push(allInputs[i])
    }
  }

  document.getElementById("button").disabled = true;
  document.getElementById("button").setAttribute("style", "background-color: gray;");
  var tBody = document.getElementById("myTable").lastElementChild;
  tBody.firstChild.lastElementChild.classList.add("hidden");
  tBody.firstChild.lastElementChild.previousElementSibling.classList.add("hidden");

  allCheckBoxInputs.forEach((checkBox) => {  
    if(checkBox.checked) {
      document.getElementById("button").disabled = false;
      document.getElementById("button").setAttribute("style", "background-color: orange;");
  
      tBody.firstChild.lastElementChild.classList.remove("hidden");
      tBody.firstChild.lastElementChild.previousElementSibling.classList.remove("hidden");
    }
  });

}

function deleteRow(rowObject){
  var tr = rowObject.parentElement.parentElement;
  var tr1 = tr.nextElementSibling;
  tr.remove();
  tr1.remove();
  alert("Row Deleted Sucessfully ");

  var allInputs = document.getElementsByTagName("input");
  var allCheckBoxInputs = [];
  for (var i = 0; i < allInputs.length; i++){
    if (allInputs[i].type === 'checkbox') {
      allCheckBoxInputs.push(allInputs[i])
    }
  }

  document.getElementById("button").disabled = true;
  document.getElementById("button").setAttribute("style", "background-color: gray;");
  var tBody = document.getElementById("myTable").lastElementChild;
  tBody.firstChild.lastElementChild.classList.add("hidden");
  tBody.firstChild.lastElementChild.previousElementSibling.classList.add("hidden");

  allCheckBoxInputs.forEach((checkBox) => {  
    if(checkBox.checked) {
      document.getElementById("button").disabled = false;
      document.getElementById("button").setAttribute("style", "background-color: orange;");
  
      tBody.firstChild.lastElementChild.classList.remove("hidden");
      tBody.firstChild.lastElementChild.previousElementSibling.classList.remove("hidden");
    }
  });

}

const onArrowClick = (arrowObj) => {
  var descriptionTr =  arrowObj.parentElement.parentElement.nextElementSibling;
  if(descriptionTr.childElementCount == 3) {
    descriptionTr.lastElementChild.remove();
    descriptionTr.lastElementChild.remove();
  }
  if(descriptionTr.classList.contains("hidden")) {
    descriptionTr.classList.remove("hidden");
    if(descriptionTr.previousElementSibling.childElementCount == 10) {
      var newTD2 = document.createElement("td");
      descriptionTr.appendChild(newTD2);
      var newTD3 = document.createElement("td");
      descriptionTr.appendChild(newTD3);
    }
    

  } else {
    descriptionTr.classList.add("hidden");
  }
  
}

const editRow = (rowObj) => {
  alert("You can Edit the values of " + rowObj.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML + " here!");
}