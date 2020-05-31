import bears from '../helpers/data/bears.js';
import utils from '../helpers/utils.js';
import trackFish from './trackFish.js';

const makeBears = () => {
  let domString = '';
  for (let bear of bears.getBears()) {
    domString += `<div class="card w-25 m-3" id="${bear.id}">
                    <img src="${bear.image}" class="card-img-top " alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${bear.name}</h5>
                        <h6>${bear.name}'s Fishing Log:</h6>
                        <ul class="card-text" id="bear-${bear.id}-log">${trackFish.updateFishingLog(bear.id)}</ul>
                        <button class="btn btn-primary fishing" data-bear-id="${bear.id}">Fishing Attempt</button>
                        <button class="btn btn-primary fishing" data-bear-id="${bear.id}" data-fish>Fish Caught</button>
                      </div>
                    </div>`
  }
  utils.printToDom('#river', domString);
}

export default { makeBears };
