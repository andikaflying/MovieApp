import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Logo } from '../../assets';
import { storeUserData, getUserData } from '../../actions/authorization';
import { UPDATE_USER_DATA } from '../../reducer/LoginReducer';
import { useDispatch, useSelector } from 'react-redux';

const Splash = ({navigation }) => {
  const reducer = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
      setTimeout(async () => {
          const result = await getUserData();
          if (result != null) {
            dispatch({
              type: UPDATE_USER_DATA,
              userData: result,
            });
            navigation.replace('MainPage');
          } else {
            navigation.replace('Login');
          }
      }, 3000)
  }, [navigation])

  return (
    <View style={styles.background}>
      <Logo 
        height="80px"
        width="80px"
        viewBox="0 0 25 25" />
      <Text style={styles.text}>MOVIE APP</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 222,
    height: 105
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    fontFamily: 'Lato-Black',
  }
});
