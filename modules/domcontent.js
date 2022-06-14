const players = [
  {
    name: 'John',
    scores: 100,
  },
  {
    name: 'Steve',
    scores: 100,
  },
  {
    name: 'James',
    scores: 100,
  },
  {
    name: 'Joe',
    scores: 100,
  },
  {
    name: 'Sam',
    scores: 100,
  },
];
const showScores = document.getElementById('showScores');
const showAllScores = () => {
  players.forEach((i) => {
    const showParagraph = document.createElement('p');
    showParagraph.className = 'show-p';
    showParagraph.innerText = `${i.name} : ${i.scores}`;
    showScores.appendChild(showParagraph);
  });
};
export default showAllScores;
