// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi';

class FilmItem extends React.Component {
  render() {
      const film = this.props.film
    return (
        <View style={styles.container}>
           <Image 
           style={styles.picture}
           source={{uri: getImageFromApi(film.poster_path)}}
           />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>{film.title}</Text>
                    <Text style={styles.voteText}>{film.vote_average}</Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText} numberOfLines={6}>{film.overview}</Text>
                </View>
                <View style={styles.dateWiew}>
                    <Text style={styles.dateText}>{film.release_date}</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    picture: {
        width: 120,
        height:180,
        margin:5,
    },
    container: {
        height: 190,
        flexDirection: 'row', 
    },
    content: {
        flex:1,
        margin:5
    },
    header: {
        flex: 3,
        flexDirection: 'row'
    },
    titleText: {
        flex:1,
        fontSize:20, 
        fontWeight: 'bold',
        flexWrap: 'wrap',
        paddingRight: 5
    }, 
    voteText:{
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    descriptionView: {
        flex:7
    },
    descriptionText: {
        fontStyle: 'italic',
        color: '#666666'
    },
    dateWiew: {
        flex:1
    },
    dateText: {
        textAlign: 'right',
        fontSize:14
    }
})

export default FilmItem