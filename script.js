document.addEventListener('DOMContentLoaded', () => {

const greetBtn = document.getElementById('greet-btn');
const greetMessage = document.getElementById('greet-message');

if (greetBtn && greetMessage) {
    greetBtn.addEventListener('click', () => {
        greetMessage.textContent = "Thanks for clicking! Welcome to my web space.";
    });
}

const userGoalInput = document.getElementById('user-goal-input');

if (userGoalInput) {
userGoalInput.addEventListener('input', () => {
  if (userGoalInput.value.trim().length > 0) {
    userGoalInput.classList.add('highlight-input');
  } else {
    userGoalInput.classList.remove('highlight-input');
  }
});
}

const hobbyInput = document.getElementById('hobby-input');
const addHobbyBtn = document.getElementById('add-hobby-btn');
const hobbyList = document.getElementById('hobby-list');

if (hobbyInput && addHobbyBtn && hobbyList) {
  addHobbyBtn.addEventListener('click', () => {
    const hobbyText = hobbyInput.value.trim();

    if (hobbyText === '') {
      alert('please type a hobby before adding it to the list.');
      return;
    }

    const newListItem = document.createElement('li');
    const textSpan = document.createElement('span');
    const removeBtn = document.createElement('button');

    textSpan.textContent = hobbyText;
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('delete-btn');

    removeBtn.addEventListener('click', () => {
      newListItem.remove();
    });

    newListItem.appendChild(textSpan);
    newListItem.appendChild(removeBtn);
    hobbyList.appendChild(newListItem);

    hobbyInput.value = '';
  });
}
const form = document.getElementById('my-form');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');

const emailError = document.getElementById('email-error');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const ageError = document.getElementById('age-error');

const apiStatus = document.getElementById('api-status');

if (form) {
  form.addEventListener('submit', (e) => {
    let isValid = true;

    usernameError.textContent = '';
    passwordError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';

    if (usernameInput.value.trim() === '') {
      usernameError.textContent = 'Username is required.';
      isValid = false;
    }
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailInput.value.includes('@')) {
      emailError.textContent = 'Email must contain an "@" symbol.';
      isValid = false;
    }
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    }
    if (ageInput.value.trim() === '') {
      ageError.textContent = 'Age is required.';
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    } else {
      e.preventDefault();
      alert('Success! Your form validation rules have successfully passed.');
    }
  });
}

if (emailInput && emailError) {
  emailInput.addEventListener('input', () => {
    if (emailInput.value.includes('@') || emailInput.value.trim() === '') {
      emailError.textContent = '';
    }
  });
}

if (usernameInput && usernameError) usernameInput.addEventListener('input', () => { if (usernameInput.value.trim() !== '') usernameError.textContent = ''; });
if (passwordInput && passwordError) passwordInput.addEventListener('input', () => { if (passwordInput.value.trim() !== '') passwordError.textContent = ''; });
if (ageInput && ageError) ageInput.addEventListener('input', () => { if (ageInput.value.trim() !== '') ageError.textContent = ''; });


function fetchPublicData() {
  if (!apiStatus) return;
  apiStatus.textContent = 'Loading live fact data...';

  fetch('https://catfact.ninja')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status Code: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      apiStatus.innerHTML = `<strong>Random Fact:</strong> ${data.fact}`;
    })
    .catch(error => {
      console.error('Fetch Exception caught:', error);
      apiStatus.textContent = `Failed to process data stream: ${error.message}`;
    });
    }

    fetchPublicData();
  });