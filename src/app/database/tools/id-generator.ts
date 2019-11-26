export function generateUniqueId() {
  const epoch = getDateEpoch();
  const rnd = getRandomNumber();
  return `${epoch}${rnd}`;
}

export function getRandomNumber() {
  return Math.round(Math.random() * 1000);
}

export function getDateEpoch() {
  return (new Date()).getTime();
}
