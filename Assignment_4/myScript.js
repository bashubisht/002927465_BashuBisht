const showValidationError = (elementId, errorMessage) => {
    document.getElementById(elementId).innerHTML = errorMessage;
}

const validateRequiredField = (elementIdOrName, errorElementId, fieldName, type) => {
    
    if(type === 'text') {
        var value = document.getElementById(elementIdOrName).value.trim();
        if(!value) {
            showValidationError(errorElementId, fieldName + ' is a required field.')
            return false;
        } else {
            showValidationError(errorElementId, '')
            return true;
        }
    }

    if(type === 'radio') {
        var radioButtons = document.getElementsByName(elementIdOrName);
        var anyRadioChecked = false;
        for (var i = 0; i < radioButtons.length; i++) {
            if(radioButtons[i].checked) {
                anyRadioChecked = true;
                break;
            }
        }
        if(!anyRadioChecked) {
            showValidationError(errorElementId, fieldName + ' is a required field.');
            return false;
        }
        else {
            showValidationError(errorElementId, '');
            return true;
        }

    }
    
}

const validateAgainstRegex = (elementId, errorElementId, fieldName, type) => {
    
    if(!validateRequiredField(elementId, errorElementId, fieldName, 'text')) {
        return false;
    }

    fieldValue = document.getElementById(elementId).value;

    if(type === 'email') {
        if(!fieldValue.match(/^[A-Za-z0-9._%+-]+@northeastern\.edu$/g)) {
            document.getElementById(errorElementId).innerHTML = 'Please enter correct email id with @northeastern.edu domain';
            return false;
        } else return true;
    }

    if(type === 'phone') {
        if(!fieldValue.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g)) {
            document.getElementById(errorElementId).innerHTML = 'Please enter a valid Phone Number';
            return false;
        } else return true;
    }

    if(type === 'zipcode') {
        if(!fieldValue.match(/^\d{5}(?:[-\s]\d{4})?$/g)) {
            document.getElementById(errorElementId).innerHTML = 'Please enter a valid Zipcode';
            return false;
        } else return true;
    } 

}

const createDynamicCheckbox = (dropDownEvent) => {

    document.getElementById('customText').value = '';

    var checkboxType = dropDownEvent.target.value;

    var checkBoxDiv = document.getElementById('feedbackCheckBoxDivId');

    checkBoxDiv.innerHTML = '';
    document.getElementById('customTextDivId').style.display = 'none';

    var checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.name = checkboxType + 'CheckBox';
    checkBox.value = checkboxType + 'CheckBox';
    checkBox.id = 'customizeCheckboxId'

    var checkBoxLabel = document.createElement("label");
    checkBoxLabel.htmlFor = checkboxType + 'CheckBox';
    checkBoxLabel.innerHTML = 'Add ' + checkboxType + ' feedback comments';

    checkBoxDiv.appendChild(checkBox);
    checkBoxDiv.appendChild(checkBoxLabel);

    checkBox.addEventListener('change', handleDynamicCheckboxChange);

}



const handleDynamicCheckboxChange = (e) => {
    document.getElementById('customText').value = '';
    if(e.target.checked) {
        document.getElementById('customTextDivId').style.display = 'block'
    } else {
        document.getElementById('customTextDivId').style.display = 'none'
    }
}

const onSubmitHandle = (e) => {

    e.preventDefault();
    var isValidForm = validateAllFields();

    if(isValidForm) {
        var table = document.getElementById('tableId');
        var newRow = table.insertRow(-1);

        var title = "";
        for(var i = 0; i < document.getElementsByName('title').length; i++) {
            if(document.getElementsByName('title')[i].checked) {
                title = document.getElementsByName('title')[i].value;
            }
        }
        
        var titleCell = newRow.insertCell(0);
        titleCell.innerHTML = title;

        var firstName = document.getElementById('firstName').value;
        var fNameCell = newRow.insertCell(1);
        fNameCell.innerHTML = firstName;

        var lastName = document.getElementById('lastName').value;
        var lNameCell = newRow.insertCell(2);
        lNameCell.innerHTML = lastName;

        var email = document.getElementById('emailId').value;
        var emailCell = newRow.insertCell(3);
        emailCell.innerHTML = email;

        var phone = document.getElementById('phoneNumber').value;
        var phoneCell = newRow.insertCell(4);
        phoneCell.innerHTML = phone;

        var address1 = document.getElementById('streetAddress1').value;
        var address1Cell = newRow.insertCell(5);
        address1Cell.innerHTML = address1;

        var address2 = document.getElementById('streetAddress2').value;
        var address2Cell = newRow.insertCell(6);
        address2Cell.innerHTML = address2;
        
        var city = document.getElementById('city').value;
        var cityCell = newRow.insertCell(7);
        cityCell.innerHTML = city;

        var state = document.getElementById('state').value;
        var stateCell = newRow.insertCell(8);
        stateCell.innerHTML = state;

        var zipcode = document.getElementById('zipcode').value;
        var zipcodeCell = newRow.insertCell(9);
        zipcodeCell.innerHTML = zipcode;

        var source = '';
        for(var i = 0; i < document.getElementsByName('source').length; i++) {
            if(document.getElementsByName('source')[i].checked) {
                source = source + ' ' + document.getElementsByName('source')[i].value;
            }
        }

        var sourceCell = newRow.insertCell(10);
        sourceCell.innerHTML = source;

        var comments = document.getElementById('comments').value;
        var commentsCell = newRow.insertCell(11);
        commentsCell.innerHTML = comments;

        var feedback = document.getElementById('feedback').value;
        var feedbackCell = newRow.insertCell(12);
        feedbackCell.innerHTML = feedback;

        var customText = document.getElementById('customText').value;
        var customTextCell = newRow.insertCell(13);
        customTextCell.innerHTML = customText;

        onResetForm();

    }

    return;

}

const validateAllFields = () => {

    var allFieldsValid = true;

    var individualFieldValid = false;

    individualFieldValid = validateRequiredField('title', 'radioError', 'Title', 'radio');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('firstName', 'fNameError', 'First Name', 'text');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('lastName', 'lNameError', 'Last Name', 'text');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateAgainstRegex('emailId', 'emailError', 'Email Id', 'email');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateAgainstRegex('phoneNumber', 'phoneError', 'Phone Number', 'phone');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('streetAddress1', 'addressError', 'Street Address 1', 'text');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('city', 'cityError', 'City', 'text');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('state', 'stateError', 'State', 'text');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateAgainstRegex('zipcode', 'zipError', 'Zipcode', 'zipcode');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('source', 'checkBoxError', 'This', 'radio');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    individualFieldValid = validateRequiredField('comments', 'commentError', 'Comments', 'text');
    if(!individualFieldValid) {
        allFieldsValid = individualFieldValid;
    }

    if(!!document.getElementById('customizeCheckboxId')) {

        if(document.getElementById('customizeCheckboxId').checked) {
            individualFieldValid = validateRequiredField('customText', 'customTextError', 'Custom Feedback', 'text');
            if(!individualFieldValid) {
                allFieldsValid = individualFieldValid;
            }
        }
    }

    return allFieldsValid;
}

const onResetForm = () => {

    for(var i = 0; i < document.getElementsByName('title').length; i++) {
        document.getElementsByName('title')[i].checked = false; 
    }

    for(var i = 0; i < document.getElementsByName('source').length; i++) {
        document.getElementsByName('source')[i].checked = false; 
    }

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('streetAddress1').value = '';
    document.getElementById('streetAddress2').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zipcode').value = '';
    document.getElementById('comments').value = '';
    document.getElementById('feedback').value = '';
    document.getElementById('customText').value = '';
    document.getElementById('customizeCheckboxId').checked = false;
    document.getElementById('customTextDivId').style.display = 'none';

}

