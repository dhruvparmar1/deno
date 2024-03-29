import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useAuth} from 'stores/auth';
import {Button, Input, Screen} from 'ui/components';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const Login = () => {
  const {signIn} = useAuth();

  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    signIn({access: 'access-token', refresh: 'refresh-token'});
  };
  return (
    <Screen>
      <Input control={control} name="email" label="Email" />
      <Input
        control={control}
        name="password"
        label="Password"
        placeholder="***"
        secureTextEntry={true}
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant="secondary"
      />
    </Screen>
  );
};

export default Login;
