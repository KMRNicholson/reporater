import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './Repository/RepositoryList';
import SignIn from './Auth/SignIn';
import AppBar from './AppBar/AppBar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
  },
});

const Main = () => {
  const onSubmit = values => {
    console.log(values.username)
    console.log(values.password)
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn onSubmit={onSubmit}/>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;