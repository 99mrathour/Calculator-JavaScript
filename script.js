let result = document.getElementById('result');
let themeButton = document.getElementById('themeButton');
let isDarkTheme = false;

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme');

  if (isDarkTheme) {
    themeButton.textContent = 'Light Theme';
  } else {
    themeButton.textContent = 'Dark Theme';
  }
}

//
function appendCharacter(char) {
  result.value += char;
}

function clearResult() {
  result.value = '';
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
