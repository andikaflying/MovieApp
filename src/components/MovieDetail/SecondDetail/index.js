import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants'
import SeeMore from 'react-native-see-more-inline';

const SecondDetail = ({overview}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Synopsis</Text>
      {overview != null && 
        <SeeMore 
          style={styles.paragraph}
          numberOfLines={2}>
            {overview}
        </SeeMore>
      }
    </View>
  )
}

export default SecondDetail

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
    }, 
    header: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: COLOR_PRIMARY,
        marginBottom: 14
    },
    paragraph: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: COLOR_SECONDARY,
        textAlign: 'justify'
    }
})