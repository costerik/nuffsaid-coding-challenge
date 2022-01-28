import {render} from '@testing-library/react';
import {Application} from '../components';

test('renders learn react link', () => {
  const comp = render(<Application />);
  expect(comp).toBeTruthy();
});
