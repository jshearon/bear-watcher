import bears from '../helpers/data/bears.js';
import utils from '../helpers/utils.js'

const makeBears = () => {
  let domString = '';
  for (let bear of bears.getBears()) {
    domString += `<div class="card" id="${bear.id}">
                    <img src="${bear.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${bear.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>`
  }
  utils.printToDom('#river', domString);
}

export default { makeBears };
