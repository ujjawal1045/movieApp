{
    type: 'INCREASE_COUNT'
}
{
    type: 'ADD_MOVIES'
}

{
    type : 'DECREASE_COUNT'
}
export const ADD_MOVIES = 'ADD_MOVIES';
 

// action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}