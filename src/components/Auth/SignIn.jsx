import { useFormik } from 'formik';
import { TextInput, View, Pressable } from 'react-native-web';

import Text from '../Text';

const initialValues = {
  username: '',
  password: ''
}

const SignIn = ({onSubmit}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <View>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;