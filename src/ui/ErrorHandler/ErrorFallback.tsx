import * as React from 'react';
import {Button, Screen, Text, View} from 'ui/components';

export function ErrorFallback({resetErrorBoundary}: any) {
  return (
    <Screen>
      <View>
        <Text> Something went wrong: </Text>
        <Button label="try Again" onPress={resetErrorBoundary} />
      </View>
    </Screen>
  );
}
