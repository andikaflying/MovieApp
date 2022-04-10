import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useReducer } from 'react'
import { TrendingList, MovieList } from '../../components'
import axios from 'axios'
import { ENDPOINT_MOVIES_LIST, COLOR_PRIMARY } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { DISPLAY_RECOMMENDED_MOVIES_SUCCESS, DISPLAY_ALL_MOVIES_SUCCESS } from '../../reducer/MoviesReducer';
import { LOGOUT } from '../../reducer/LoginReducer';
import { removeUserData } from '../../actions/authorization';
import { cloneDeep } from 'lodash';

const MainPage = props => {
  const reducers = useSelector(state => state);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const displayRecommendedMovies = () => {
    dispatch(asyncGetMovies());
  };

  const sortByPopularity = (a, b) => a.popularity < b.popularity ? 1 : -1

  const sortByReleaseDate = (a, b) => new Date(a.release_date).getTime() < new Date(b.release_date).getTime() ? 1 : -1

  function asyncGetMovies() {
    return async dispatching => {
      // async ajax sample using fetch
      await axios
        .get(ENDPOINT_MOVIES_LIST)
        .then(function (response) {
          const allData = response.data.results;
          const popularData = cloneDeep(allData);
          const latestData = cloneDeep(allData);
          popularData.sort(sortByPopularity);
          latestData.sort(sortByReleaseDate);

          //Action
          dispatching({
            type: DISPLAY_RECOMMENDED_MOVIES_SUCCESS,
            payload: popularData
          });
          dispatching({
              type: DISPLAY_ALL_MOVIES_SUCCESS,
              payload: latestData
           });
        });
    };
  }

  useEffect(() => {
    displayRecommendedMovies();
  }, []);

  const goToDetail = (id) => {
    props.navigation.navigate('MovieDetail', {
      itemId: id,
    });
  }

  const logout = () => {
    dispatch({
      type: LOGOUT
    });

    removeUserData();
    props.navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.trendingContainer}>
        <View style={styles.topView}>
          <Text style={styles.name}>Hi, {reducers.loginReducer.name} !</Text>
          <Text style={styles.logout} onPress={logout}>Logout</Text>
        </View>
        {console.log("001 - Movie reducer = " + JSON.stringify(reducers.moviesReducer))}
        {reducers.moviesReducer.recommendedMovies.length > 0 && <TrendingList data={reducers.moviesReducer.recommendedMovies} goToDetail={goToDetail} />}
        {reducers.moviesReducer.data.length > 0 && <MovieList data={reducers.moviesReducer.data} goToDetail={goToDetail} />}
      </View>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  name: {
    fontSize: 16,
    color: COLOR_PRIMARY,
    fontFamily: 'Lato-Bold'
  },
  logout: {
    fontSize: 16,
    color: COLOR_PRIMARY,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase'
  },
  topView: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 16,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  trendingContainer: {
    flex: 1,
  }
})