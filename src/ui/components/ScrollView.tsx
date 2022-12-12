import {createBox} from '@shopify/restyle';
import {ScrollView as NSScrollView} from 'react-native';
import {Theme} from '../theme';

export const ScrollView = createBox<
  Theme,
  React.ComponentProps<typeof NSScrollView> & {children?: React.ReactNode}
>(NSScrollView);
