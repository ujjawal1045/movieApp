
import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    // an use this for api call
    // can also use this to dispatch action for store
    const {store} = this.props;
    store.subscribe(() => {
      console.log('UPDATED')
      this.forceUpdate();
    });
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    // movies: data
    // });
    store.dispatch(addMovies(data));
    console.log('state',this.props.store.getState());
  }
  render() {
// function App(props) {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
