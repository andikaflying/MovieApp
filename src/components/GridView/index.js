import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridView = ({data, renderItem, selectedId}) => (
    <View style={styles.container}>
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
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
                <Text>{item.title}</Text>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
    </View>
);

export default GridView

const styles = StyleSheet.create({})