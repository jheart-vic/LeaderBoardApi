let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zptrWV97kHcKHhEzdCRc/scores';

const setData = async () => {
  const response = await fetch(url);
  const scores = await response.json();
   return scores
};

const setScores = async (player, scores) => {
  const information = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: player, score: scores }),
  });
  const allScore = information.json();
  return allScore
};

export { setData, setScores };



