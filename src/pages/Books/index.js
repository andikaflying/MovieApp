import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useReducer } from 'react'
import { BooksList } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

const Books = props => {
    const reducers = useSelector(state => state);
    const [books, setBooks] = useState(null);

    useEffect(() => {
        displayBooks();
    }, []);

    const displayBooks = () => {
        const objectConfig = {
            headers: {
                Authorization: 'Bearer ' + reducers.loginReducer.token
            }
        }

        axios
          .get('http://code.aldipee.com/api/v1/books', objectConfig)
          .then(function (response) {
              setBooks(response.data.results);
              console.log("Results = " + JSON.stringify(response.data.results));
          });
    }

    return (
        <View style={styles.container}>
            {books != null && <BooksList data={books} />}
            {console.log("books rendered = " + JSON.stringify(books))}
        </View>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})