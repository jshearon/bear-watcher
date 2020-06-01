const fish = [
  {bearId: 2, caught: true, timeStamp: 1590998380600},
  {bearId: 4, caught: true, timeStamp: 1590998380800},
  {bearId: 3, caught: true, timeStamp: 1590998386000},
  {bearId: 5, caught: true, timeStamp: 1590998380200},
  {bearId: 5, caught: true, timeStamp: 1590998380100}
];

const getFish = (bearId) => fish.filter(element => element.bearId == bearId);

const setFish = (bearId, fishCaught) => {
  const timeStamp = Date.now();
  const newFish = {
    bearId: bearId,
    caught: fishCaught != null ? true : false,
    timeStamp: timeStamp
  }
  fish.push(newFish);
}

export default { getFish, setFish }
