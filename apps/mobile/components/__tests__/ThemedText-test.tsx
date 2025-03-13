import renderer from 'react-test-renderer';

import { ThemedText } from '../ThemedText';

test(`renders correctly`, () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON();

  expect(tree).toMatchSnapshot();
});
