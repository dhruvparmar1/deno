import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {useLoginUser} from '../../api/user/user';

const Login = () => {
  const [state, setState] = useState({
    isApiCalled: false,
    username: '',
    password: '',
  });
  const {status, data, isLoading} = useLoginUser(
    {username: state.username, password: state.password},
    {query: {enabled: state.isApiCalled}},
  );
  console.log(data, status, isLoading);

  const handleLogin = () => {
    setState({isApiCalled: true, username: 'test', password: 'test'});
    console.log('Login received from server');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleLogin}>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
