// component PRINCIPAL recherche qui contient l'input de recherche et son bouton
// importe les données, et le component / container film

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
// component , vue des films
import FilmItem from './FilmItems'
// import de ma fonction qui appelle l'API TMDBApi.js
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 

class Search extends React.Component {

    // le constructeur de notre component à un paramètre props par défaut
    // Afficher les films de l'API
    constructor(props) {
        super(props)
        // Ici on va créer les propriétés de notre component custom Search
        this.searchedText =  "" // Initialisation de notre donnée searchedText en dehors du state
        
        // state: on l'utilise car le tableau des films est modifé à chaque fois qu'on fait appel à l'API
        this.state = { // le nom de cette propriété est fixe, vous ne pouvez la changer
            films: [],  // On initialise notre state avec une liste de film vide
            isLoading: false // Par défaut false car il n'y pas de chargement tant qu'on ne lance pas de recherche    
        }
    }
    // Méthode , fonction au clique du bouton. _ pour indiquer que c'est privé
    _loadFilms(){ 
            if (this.searchedText.length > 0 ) { // Seulement si le texte recherché n'est pas vide
                this.setState({ isLoading: true }) // Lancement du chargement
                // methode (fonction) importé de API/TMDBApi.js qui va chercher les réponses
                getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                    // Pour modifier une donnée du state on passe toujours par setState

                    this.setState({ 
                         films: data.results, // les films sont stuqé dans un tableau result ()
                         isLoading: false // arret du chargement
                         }) 
            }) 
        }
     }
    _searchTextInputChanged(text) {
        this.searchedText = text // Modification du texte recherché à chaque saisie de texte sans passer par le setState
    }
    _displayLoading() {
        if(this.state.isLoading) { // Si en chargement
            return (
               <View style={styles.loading_container}>
                {/* rond de loading */}
                   <ActivityIndicator size='large' color='#0000ff' /> 
               </View> 
            )
        }
    }


    render() {
        console.log("RENDER")
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder="Titre du film" 
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing= {() => this._loadFilms()} // props sur textinput qui autorise d'appyer sur le ok du clavier
                /> 
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._loadFilms()}/>
                {/* La liste des films */}
                <FlatList
                    data={this.state.films} // les données affichées = props films tableau vide
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({item}) => <FilmItem film={item}/>} // 
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 50
  },  
  textinput: {
    marginLeft: 5,
    marginRight: 5, 
    height: 50,
    borderWidth: 1, 
    paddingLeft: 5
  },
  loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default Search