import { setData } from "./apiFlie";



const showAllScores = () => {
  const showScores = document.getElementById('showScores');
  setData().then((data) => {
    showScores.innerHTML = '';
    const arrangeAllScores = data.result.sort((a, b) => b.score - a.score)
    arrangeAllScores.forEach((score) => {
      const showParagraph = document.createElement('p');
      showParagraph.className = 'show-p'
      showParagraph.innerText =   `${score.user}: ${score.score}`
      showScores.appendChild(showParagraph)

    })
  })
}
export default showAllScores
