import './style.css';
import { setScores } from '../modules/apiFlie.js';
import showAllScores from '../modules/refresh.js';

const submit = document.getElementById('submit');
const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const refresh = document.getElementById('refresh');
const message = document.getElementById('errorMessage');
const load = document.querySelector('.load-indicator');
const displayDiv = document.querySelector('#display-div');

document.addEventListener('DOMContentLoaded', showAllScores);
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target) {
    const appreciationMessage = document.createElement('p');
    appreciationMessage.textContent = 'There\'s no limit to what you can achieve';
    appreciationMessage.style.fontFamily = 'cursive';
    appreciationMessage.style.color = 'rgb(0, 168,132)';
    appreciationMessage.style.alignSelf = 'flex-end';
    appreciationMessage.style.fontSize = '27px';
    displayDiv.insertBefore(appreciationMessage, displayDiv[0]);
    setTimeout(() => {
      appreciationMessage.style.display = 'none';
    }, 5000);
  }
  showAllScores();
});
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  if (playerName.value === '' || playerScore.value === '') {
    message.innerText = 'please add valid user and score';
    message.style.display = 'block';
    message.style.color = 'red';
    load.style.animation = '5s load linear';
    load.style.background = 'red';
    setTimeout(() => {
      message.style.display = 'none';
      load.style.animation = '';
    }, 5000);
  } else {
    message.innerText = 'Your score has been added, click refresh to see score';
    message.style.color = 'rgb(0, 168,132)';
    message.style.display = 'block';
    load.style.animation = '5s load linear';
    load.style.background = 'rgb(0, 168,132)';
    setTimeout(() => {
      message.style.display = 'none';
      load.style.animation = '';
    }, 5000);
  }
  await setScores(playerName.value, playerScore.value);
  playerName.value = '';
  playerScore.value = '';
});