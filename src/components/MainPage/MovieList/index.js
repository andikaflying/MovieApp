import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight } from 'react-native'
import React from 'react'

const MovieList = ({data, goToDetail}) => {

  const renderItem = (item) => {
    return (
      <View style={styles.item}  key={item.id}>
        <TouchableHighlight style={styles.itemContainer} onPress={() => goToDetail(item.id)} >
          <View>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.poster_path}}
            />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Movie List</Text>
      <View style={styles.gridContainer}>
        {(data != null) && data.map(item => {
          return renderItem(item);
        })}
      </View>
    </View>
  );
};

export default MovieList

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      marginHorizontal: 18,
    }, 
    gridContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' // if you want to fill rows left to right
    },
    header: {
      fontSize: 24,
      color: 'white',
      fontFamily: 'Lato-Regular',
      marginBottom: 23,
    },
    item: {
      width: "45%",
      height: windowHeight * 0.22,
      marginRight: 10,
      marginBottom: 55,
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