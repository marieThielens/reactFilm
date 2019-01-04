# reactFilm

Application React avec l'api TMDB (the movie data base) pour récupérer toute sorte de films.
Il faut vous créer un compte sur https://www.themoviedb.org/account/signup?language=fr 

Les fichiers : 

- **API/TMDBApi.js** : fichier qui récupère l'api de TMDB et l'image des films
- **Components/FilmItems.js** : le component des films. Est la vue de la liste des films. Il importe aussi l'image des films
- **Components/Search.js** : l'input de rechercher, le bouton et les méthodes, fonctions lorsqu'on clique sur rechercher


FlatList Notre liste de film 

```js
<FlatList
    data={this.state.films} // les données affichées = props films tableau vide
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => <FilmItem film={item}/>}
/>
```

- Flatlist : permet d'afficher une liste de donées (mon objet)
- data : qui correspond aux données affichées dans la liste
- keyExtractor : crée une key sur les items. `toString()`
- renderItem : c'est comme . film= 

```js
class FilmItem {
    var film;
}
var filmItem = new FilmItem();
filmItem.film = item;
```
