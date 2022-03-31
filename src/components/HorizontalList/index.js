import React from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

const HorizontalList = ({data, renderItem, selectedId}) => {
  return (
    <TouchableWithoutFeedback onPress={()=>{}}>
      <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
      />
    </TouchableWithoutFeedback>
  )
}

export default HorizontalList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  }
});