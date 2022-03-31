import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const HorizontalListItem = ({image, name, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.nameContainer}>
           <Text style={styles.name}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  export default HorizontalListItem;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  item: {
      padding: 4,
      marginVertical: 8,
  },
  nameContainer: {
      alignItems: 'center', 
      justifyContent: 'center'
  },
  name: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: 'white',
      backgroundColor: 'rgba(218, 218, 218, 0.3)',
      marginBottom: 50,
      paddingVertical: 25,
      paddingHorizontal: 20,
      borderRadius: 15,
      textAlign: 'center'
  },
  image: {
      width: windowWidth * 0.5,
      height: windowHeight * 0.413,
      justifyContent: 'flex-end',
      paddingRight: 8,
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'transparent',
  },
});