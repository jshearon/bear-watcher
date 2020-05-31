import utils from "../helpers/utils.js";
import bears from "../helpers/data/bears.js";

const fishingAttempts = [];

const updateFishingLog = (bearId) => {
  const fishingLog = fishingAttempts.filter(element => element.bearId === bearId);
  let domString = '';
  fishingLog.forEach(element => {
    domString += `<li>${element.caught ? "Caught" : "Missed"} a fish at ${element.timeStamp.toLocaleString()}</li>`
  });
  if (domString === "") {
    return "No attempts made";
  } else {
    utils.printToDom(`#bear-${bearId}-log`, domString);
  }
}

const trackFishingAttempts = (bearId, fishCaught) => {
  const timeStamp = new Date();
  const attempt = {
    bearId: bearId,
    caught: fishCaught != null ? true : false,
    timeStamp: timeStamp
  }
  fishingAttempts.push(attempt);
  updateFishingLog(bearId);
}

const listener = () => {
  document.querySelector('#river').addEventListener('click', function(e) {
    if (!e.target) { return; }
    if (e.target.matches('.fishing')) {
      trackFishingAttempts(e.target.dataset.bearId, e.target.dataset.fish);
    }
  });
}



export default { listener, updateFishingLog }
