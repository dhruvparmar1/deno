import React from 'react';
import {
  Button,
  Screen,
  ScrollView,
  showErrorMessage,
  Text,
  View,
} from 'ui/components';
import {Selector} from 'components';

import {useTasks} from 'api';
import {ActivityIndicator} from 'react-native';
import {signOut} from 'stores/auth';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {data, isLoading} = useTasks();
  const {t} = useTranslation();
  return (
    <Screen>
      <Selector />
      <View flex={1} justifyContent="center">
        <Text variant="header" textAlign="center">
          {`${t('common:hello')} 👋`}
        </Text>
        {/* <Text variant="body" textAlign="center">
          This is An ENV Var : {API_URL}
        </Text> */}
        {isLoading && <ActivityIndicator color="#000" />}

        <Text variant="body">Data from Api :</Text>
        <ScrollView
          maxHeight={20}
          horizontal
          marginBottom={'l'}
          showsHorizontalScrollIndicator={false}>
          {data?.map(item => {
            return <Text>{item.color}</Text>;
          })}
        </ScrollView>
        <Button label="LogOut" onPress={signOut} />
        <Button
          variant="secondary"
          label="Show message"
          onPress={() => showErrorMessage()}
        />
      </View>
    </Screen>
  );
};

export default Home;
