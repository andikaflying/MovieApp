import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridViewItem = ({item}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 1
      }}>
      <Image
        style={styles.imageThumbnail}
        source={{uri: item.src}}
      />
      <Text>Kudaku lari tanpamu</Text>
    </View>
);

export default GridViewItem

const styles = StyleSheet.create({})