import './style.css';
import { setScores } from '../modules/apiFlie.js';
import showAllScores from '../modules/refresh.js';

const submit = document.getElementById('submit');
const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const refresh = document.getElementById('refresh');
const message = document.getElementById('errorMessage');

document.addEventListener('DOMContentLoaded', showAllScores);
refresh.addEventListener('click',() =>{
  showAllScores();
});
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  if (playerName.value === '' || playerScore.value === '') {
    message.style.display = 'block';
    message.style.color = 'red';
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }
  await setScores(playerName.value, playerScore.value);
  showAllScores();
  playerName.value = '';
  playerScore.value = '';
});