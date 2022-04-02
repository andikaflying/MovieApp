import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeUserData(user) {
    try {
       const data = (user != null) ? JSON.stringify(user) : {};
       await AsyncStorage.setItem("UserData", data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
}

export async function getUserData() {
    try {
      let userData = await AsyncStorage.getItem("UserData");
      let data = null;
      if (Object.keys(userData).length != 0) {
        data = JSON.parse(userData);
      }
      return data;

    } catch (error) {
      return null;
    }
}

export async function removeUserData() {
  try {
      await AsyncStorage.removeItem('UserData');
  }
  catch(exception) {
      console.log(exception)
  }
}