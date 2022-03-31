import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants'
import { Clock, Rating } from '../../../assets';
import Line from '../../Line';

const TitleBox = () => {
  return (
    <View style={styles.titleBox}>
        <Text style={styles.title}>Star Wars: The Last Jedi</Text>
        <View style={styles.titleBoxDetail}>
            <View style={{...styles.textIcon, marginRight: 30}}>
              <Clock />
              <Text style={styles.label}> 152 Minutes </Text>
            </View>
            <View style={styles.textIcon}>
              <Rating />
              <Text style={styles.label}> 7.0 (IMDB) </Text>
            </View>
        </View>
        <Line />
    </View>
  )
}

export default TitleBox

const styles = StyleSheet.create({
    titleBox: {
        
    }, 
    title: {
      fontSize: 28,
      color: COLOR_PRIMARY,
      fontFamily: 'Lato-Regular',
    },
    label: {
      fontSize: 14,
      color: COLOR_SECONDARY,
      fontFamily: 'Lato-Bold',
      marginLeft: 5,
    },
    textIcon: {
      flexDirection: 'row'
    },
    titleBoxDetail: {
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 25
    },
})