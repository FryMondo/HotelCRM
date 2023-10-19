const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const surnameInput = document.getElementById('surname');
const firstNameInput = document.getElementById('first-name');
const middleNameInput = document.getElementById('middle-name');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const phoneInput = document.getElementById('phone');
const groupInput = document.getElementById('group');
const dateInput = document.getElementById('date');
const fileInput = document.querySelector('input[type="file"]');

emailInput.addEventListener('input', function () {
    clearErrorMessages('email-error');
});

passwordInput.addEventListener('input', function () {
    clearErrorMessages('password-error');
});

surnameInput.addEventListener('input', function () {
    clearErrorMessages('surname-error');
});

firstNameInput.addEventListener('input', function () {
    clearErrorMessages('first-name-error');
});

middleNameInput.addEventListener('input', function () {
    clearErrorMessages('middle-name-error');
});

genderInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        clearErrorMessages('gender-error');
    });
});

dateInput.addEventListener('input', function () {
    clearErrorMessages('date-error');
});

phoneInput.addEventListener('input', function () {
    clearErrorMessages('phone-error');
});

fileInput.addEventListener('input', function () {
    clearErrorMessages('file-error');
});

function validateForm() {
    const email = emailInput.value;
    const password = passwordInput.value;
    const surname = surnameInput.value;
    const firstName = firstNameInput.value;
    const middleName = middleNameInput.value;
    let selectedGender = '';
    genderInputs.forEach(function (input) {
        if (input.checked) {
            selectedGender = input.value;
        }
    });
    const selectedGroup = groupInput.value;
    const date = dateInput.value;
    const phone = phoneInput.value;
    const selectedFile = fileInput.value;
    clearErrorMessages();
    if (email.trim() === '') {
        displayError('email-error', '(!) Заповніть поле Email');
        return false;
    }
    if (password.trim() === '') {
        displayError('password-error', '(!) Заповніть поле Пароль');
        return false;
    }
    if (surname.trim() === '') {
        displayError('surname-error', '(!) Заповніть поле Прізвище');
        return false;
    }
    if (firstName.trim() === '') {
        displayError('first-name-error', '(!) Заповніть поле Ім\'я');
        return false;
    }
    if (middleName.trim() === '') {
        displayError('middle-name-error', '(!) Заповніть поле По-батькові');
        return false;
    }
    if (!selectedGender) {
        displayError('gender-error', '(!) Виберіть свою стать');
        return false;
    }
    if (date.trim() === '') {
        displayError('date-error', '(!) Заповніть дату народження');
        return false;
    }
    if (phone.trim() === '') {
        displayError('phone-error', '(!) Заповніть Номер телефону');
        return false;
    }
    if (selectedFile.trim() === '') {
        displayError('file-error', '(!) Завантажте файл');
        return false;
    }
    addToDataTable(email, password, surname, firstName, middleName, selectedGender, phone, date, selectedGroup, selectedFile);
    emailInput.value = '';
    passwordInput.value = '';
    surnameInput.value = '';
    firstNameInput.value = '';
    middleNameInput.value = '';
    genderInputs.forEach(input => (input.checked = false));
    dateInput.value = '';
    phoneInput.value = '';
    groupInput.value = 'ІА-21';
    fileInput.value = '';
    return false;
}

function displayError(fieldId, message) {
    const errorField = document.getElementById(fieldId);
    errorField.textContent = message;
}

function clearErrorMessages() {
    const errorFields = document.querySelectorAll('.error-message');
    errorFields.forEach(function (field) {
        field.textContent = '';
    });
}