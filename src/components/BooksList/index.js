import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'

const BooksList = ({data}) => {

  const renderItem = (item, index) => {
    return (
      // <>
      //   {console.log("Item book = " + JSON.stringify(item))}
      // </>
      <View style={[styles.item, {marginRight: (index % 2 == 0) ? 20 : 0}]}  key={item.id}>
        <TouchableHighlight style={styles.itemContainer} >
          <View>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.cover_image}}
            />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return(
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={{paddingBottom: 50}}>
            <Text style={styles.header}>Books List</Text>
            <View style={styles.gridContainer}>
              {console.log("BooksList component - data = " + JSON.stringify(data))}
              {(data != null) && data.map((item, index) => {
                return renderItem(item, index);
              })}
            </View>
          </View>
        </ScrollView>
    </View>
  );
};

export default BooksList

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      marginTop: 8,
      marginHorizontal: 18,
      flex: 2,
    }, 
    gridContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start', // if you want to fill rows left to right
    },
    header: {
      fontSize: 24,
      color: 'white',
      fontFamily: 'Lato-Regular',
      marginBottom: 16,
    },
    scrollView: {

    },
    item: {
      width: "45%",
      height: windowHeight * 0.40,
      
    },
    imageThumbnail: {
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
    itemText: {
      color: 'white',
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      marginTop: 10,
    }
});