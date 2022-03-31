import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_LINE } from '../../utils/constants';
import { TitleBox, FirstDetail, SecondDetail } from '../../components';
import { ENDPOINT_MOVIES_LIST } from '../../utils/constants';
import axios from 'axios'

const MovieDetail = props => {
  const { itemId } = props.route.params;

  useEffect(() => {
    getDetailMovie(itemId);
  }, [itemId]);

  const getDetailMovie = (itemId) => {
    axios
      .get(ENDPOINT_MOVIES_LIST + itemId)
      .then(function (response) {
        //Action
        console.log("Response data movie detail : " + JSON.stringify(response.data))
      });
  }

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={250}
        play={false}
        videoId={'KLUwtu5A-rE'}
      />
      <View style={styles.detail}>
        <TitleBox />
        <FirstDetail />
        <SecondDetail />
      </View>
    </View>
  )
}

export default MovieDetail

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.4,
  },
  text: {
    color: COLOR_PRIMARY
  },
  detail: {
    marginHorizontal: 25
  },
})