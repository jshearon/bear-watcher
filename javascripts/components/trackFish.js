import utils from "../helpers/utils.js";
import fish from "../helpers/data/fish.js";

const updateFishLog = (bearId) => {
  const fishLog = fish.getFish(bearId);
  let domString = '';
  fishLog.forEach(element => {
    let theDate = new Date(element.timeStamp).toLocaleString()
    domString += `<li>${element.caught ? "Caught" : "Missed"} a fish at ${theDate}</li>`
  });
  if (domString == '') {
    return "No attempts made";
  } else {
    return domString;
  }
}

const countFish = (bearId) => {
  return fish.getFish(bearId).filter(element => element.caught == true).length + ` fish caught`;
}

const fishButtons = () => {
  document.querySelector('#river').addEventListener('click', function(e) {
    if (!e.target) { return; }
    if (e.target.matches('.fishing')) {
      fish.setFish(e.target.dataset.bearId, e.target.dataset.fish);
      utils.printToDom(`#fish-count-${e.target.dataset.bearId}`, countFish(e.target.dataset.bearId));
      utils.printToDom(`#bear-${e.target.dataset.bearId}-log`, updateFishLog(e.target.dataset.bearId));
    }
  });
}

export default { fishButtons, updateFishLog, countFish }
