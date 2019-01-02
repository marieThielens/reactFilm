// Récupération de l'api TMDB (the movie data base) pour récupérer toute sorte de film

const API_TOKEN = "040be6ed973ee07470f83d3d9cb13d36";

// on exporte la fonction pour pouvoir l'utiliser dans nos components
// on a présisé que le language est en fr dans l'url pour avoir des résultats en français
// on utilise fetch pour les appels réseau; comme XMLHttpRequest
// on utilise notre url de recherche avec en paramètre le token et le texte recherché
// En cas d'erreur on passe dans la catch et on affiche l'erreur
export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
  }

export function getImageFromApi (nom) {
    return 'https://image.tmdb.org/t/p/w300' + nom
}