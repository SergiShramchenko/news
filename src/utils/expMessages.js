import robot from '../assets/svg/exp-message/robot.svg';
import alien from '../assets/svg/exp-message/alien.svg';

export const no_results = {
  message: {
    reason: `Sorry, we didn't find anything`,
    response: 'Please try another category or change your request.',
  },
  img: alien,
};

export const not_found = {
  message: {
    reason: 'Sorry, something went wrong...',
    response: 'We are already working on fixing the problem.',
  },
  img: robot,
};
