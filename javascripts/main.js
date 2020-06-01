import bears from './components/makeBears.js';
import bearForm from './components/bearForm.js';
import trackFish from './components/trackFish.js';

const init = () => {
  bears.makeBears();
  bearForm.listener();
  trackFish.fishButtons();
}

init();
