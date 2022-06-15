const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/D33qglr0cQRstobyshSz/scores';

const setData = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  return scores;
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
  return allScore;
};

export { setData, setScores };
// let id;
// // generating game id from api
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
//   method: 'post',
//   headers: {
//     'content-type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'another cool game',
//   }),
// })

//   .then((res) => {
//     res.json().then((value) => {
//       console.log(value);
//       id = value.result.split(' ')[3];
//       console.log(id);
//     });
//   });
// posting users and score
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EoTxCV02Ftb3pgz9Cebz/scores', {
//   method: "post",
//   headers: {
//     "content-type": "application/json"
//   },
//   body: JSON.stringify({
//    "user": "James villa",
//    "score": 100
//   })
// })
// .then((data) => {
//   data.json().then((val) => console.log(val))
// })
// getting scores
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EoTxCV02Ftb3pgz9Cebz/scores')
// .then((data) => {
//   data.json().then((val) => console.log(val))
// })
