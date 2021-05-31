export function getScore(finalSecondofTimer: number, countOfcomparison: number, countOfFailcomparison: number) {
  let score = (countOfcomparison - countOfFailcomparison) * 100 - finalSecondofTimer * 10;
  if (score < 0) score = 0;
  score = Number(score.toFixed());
  return score;
}
