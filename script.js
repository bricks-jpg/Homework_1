
const greetBtn = document.getElementById('greet-btn');
const greetMessage = document.getElementById('greet-message');

greetBtn.addEventListener('click', () => {
    greetMessage.textContent = "Thanks for clicking! Welcome to my web soace.";
});

const userGoalInput = document.getElementById('user-goal-input');

userGoalInput.addEventListener('input', () => {
    if (userGoalInput.value.trim().length > 0) {
        userGoalInput.classList.add('highlight-input');
        } else {
            userGoalInput.classList.remove('highlight-input');
        }
});


const hobbyInput = document.getElementById('hobby-input');
const addHobbyBtn = document.getElementById('add-hobby-btn');
const hobbyList = document.getElementById('hobby-list');

addHobbyBtn.addEventListener('click', () => {
    const hobbyText = hobbyInput.value.trim();

    if (hobbyText.length > 0) {
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