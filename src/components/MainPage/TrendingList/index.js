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
import { COLOR_PRIMARY } from '../../../utils/constants';
import HorizontalListItem from '../../HorizontalListItem';
import HorizontalList from '../../HorizontalList';

const TrendingList = ({data}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return (
      <HorizontalListItem
        image={item.poster_path}
        name={item.title}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.recommendedContainer}>
        <Text style={styles.recommendedHeader}>Recommended</Text>
        <HorizontalList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.43,
    marginTop: 16,
  },
  category: {
    fontSize: 14,
    color: COLOR_PRIMARY,
  },
  recommendedHeader: {
    fontSize: 24,
    color: COLOR_PRIMARY,
    fontFamily: 'Lato-Regular',
  },
  recommendedContainer: {
    marginLeft: 18,
  },
});

export default TrendingList;
