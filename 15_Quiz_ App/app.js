// Throug fetch

const questions = fetch("questions.json")
  .then((response) => response.json())
  .then((data) => data.results);
