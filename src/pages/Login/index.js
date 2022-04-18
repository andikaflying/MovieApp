import { StyleSheet, Text, View, Pressable } from 'react-native'
import {TextInput} from 'react-native-paper';
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_LINE, ENDPOINT_LOGIN } from '../../utils/constants';
import { storeUserData, getUserData, removeUserData } from '../../actions/authorization';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../reducer/LoginReducer';

const Login = ({navigation }) => {
  const [email, setEmail] = useState('binarbinar@yopmail.com');
  const [password, setPassword] = useState('pisangbanana2022');
  const reducer = useSelector(state => state);
  const dispatch = useDispatch();

  const login = () => {
    const userAccount = {
      "email": email,
      "password": password
    };

    axios
      .post(ENDPOINT_LOGIN, userAccount)
      .then(function (response) {
        const payload = response.data;

        const data = {
          token: payload.tokens.access.token,
          isLoggedIn: true,
          id: payload.user.id,
          name: payload.user.name,
          email: payload.user.email,
          refreshToken: payload.tokens.refresh.token,
          tokenExpires: payload.tokens.access.expires,
          refreshTokenExpires: payload.tokens.refresh.expires,
        }

        //Action
        dispatch({
          type: LOGIN,
          userData: data,
        });

        storeUserData(data);

        navigation.replace('MainPage');
      }).catch(
        function (error) {
          console.log('Message :' + error.message);
        }
      )
  }

  return (
    <View style={styles.container}>
        <Text style={styles.loginHeader}>Login</Text>
        <TextInput
          style={styles.textInput}
          theme={{ colors: { text: '#BBBBBB', primary: 'transparent' }, roundness: 5 }}
          left={<TextInput.Icon name={() => <Icon name='user' size={20} style={styles.inputIcon} />} />}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          theme={{ colors: { text: '#BBBBBB', primary: 'transparent' }, roundness: 5 }}
          left={<TextInput.Icon name={() => <Icon name='key' size={20} style={styles.inputIcon} />} />}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Pressable style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
  },
  loginHeader: {
    marginTop: 50,
    fontSize: 24,
    color: COLOR_PRIMARY,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase'
  },
  textInput: {
    marginTop: 20,
    backgroundColor: '#211F30',
  },
  inputIcon: {
    color: COLOR_PRIMARY
  },
  button: {
    marginTop: 16,
    backgroundColor: 'rgba(250, 240, 202, 0.05)',
    width: 150,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 18,

  },
})