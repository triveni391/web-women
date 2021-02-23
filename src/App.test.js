import App from './App';
import { shallow } from 'enzyme';

describe(('testing app.js file'), () => {
  it('app.js file', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper);

  })
});