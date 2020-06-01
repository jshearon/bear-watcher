import bears from '../helpers/data/bears.js';
import makeBears from '../components/makeBears.js'

const addBear = (e) => {
  e.preventDefault();
  const bearName = e.target.elements.bearName.value;
  const bearImage = e.target.elements.bearImage.value;
  if (bearName && bearImage) {
    bears.setBears(bearName, bearImage);
    makeBears.makeBears();
    alert(`${bearName} has been added!`);
    setTimeout(() => { $('#open-bear-form').collapse('hide') }, 2000);
  } else {
    alert('Missing Info');
  }

}

const listener = () => {
  document.querySelector('#bear-form').addEventListener('submit', addBear);
}

export default { addBear, listener }  
