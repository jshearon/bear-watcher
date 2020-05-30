import bears from '../helpers/data/bears.js';
import makeBears from '../components/makeBears.js'

const addBear = (e) => {
  e.preventDefault();
  const bearName = e.target.elements.bearName.value;
  const bearImage = e.target.elements.bearImage.value;
  if (bearName && bearImage) {
    bears.setBears(bearName, bearImage);
    makeBears.makeBears();
  } else {
    alert('Missing Info');
  }

}

const listeners = () => {
  document.querySelector('#bear-form').addEventListener('submit', addBear);
}

export default { addBear, listeners }  
