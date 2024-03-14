import { useFormik } from 'formik';
import { TextInput, View, Pressable, StyleSheet } from 'react-native-web';
import { Text as NativeText } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    borderRadius: 2,
    padding: 5,
    margin: 5,
    textAlign: 'center',
  },
  textInput: {
    borderRadius: 2,
    padding: 5,
    margin: 5,
    outlineStyle: 'solid',
    outlineColor: '#b8b8b8',
    color: '#b8b8b8',
  },
});

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
        style={styles.textInput}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <NativeText style={styles.signInButton}>Sign in</NativeText>
      </Pressable>
    </View>
  );
};

export default SignIn;