import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_LINE } from '../../utils/constants';
import { TitleBox, FirstDetail, SecondDetail } from '../../components';
import { ENDPOINT_MOVIES_LIST } from '../../utils/constants';
import { DISPLAY_DETAIL_MOVIE_SUCCESS, DISPLAY_DETAIL_MOVIE_FAILURE } from '../../reducer/MoviesReducer';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const MovieDetail = props => {
  const detailMovie = useSelector(state => state.moviesReducer.detailMovie);
  const dispatch = useDispatch();
  const { itemId } = props.route.params;

  useEffect(() => {
    getDetailMovie(itemId);
  }, [itemId]);

  const getDetailMovie = (itemId) => {
    axios
      .get(ENDPOINT_MOVIES_LIST + itemId)
      .then(function (response) {
        dispatch({
          type: DISPLAY_DETAIL_MOVIE_SUCCESS,
          payload: response.data,
        });
      });
  }

  return (
    <View style={styles.container}>
      
      {detailMovie != null && 
          <View style={styles.box}>
            <YoutubePlayer
              height={225}
              play={false}
              videoId={'KLUwtu5A-rE'}
            />
            <View style={styles.detail}>
              <ScrollView style={styles.scrollView}>
                <View>
                  {console.log("Detail movie 1990 = " + JSON.stringify(detailMovie))}
                  {console.log("Title 1990 = " + JSON.stringify(detailMovie.title))}
                  <TitleBox 
                    title={detailMovie.title}
                    runtime={detailMovie.runtime}
                    voteAverage={detailMovie.vote_average}
                  />
                  <FirstDetail 
                    releaseDate={detailMovie.release_date}
                    genres={detailMovie.genres}
                  />
                  <SecondDetail
                    overview={detailMovie.overview}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
      }
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
  box: {
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
    marginHorizontal: 25,
    flex: 1,
  },
})