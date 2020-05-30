import bears from './components/makeBears.js';
import bearForm from './components/bearForm.js';

const init = () => {
  bears.makeBears();
  bearForm.listeners();
}

init();
