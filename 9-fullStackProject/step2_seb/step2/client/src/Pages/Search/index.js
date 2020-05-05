import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../store/actions/MovieActions';

export class Search extends Component {
  stae = {
    searchInput: '',
    searched: false,
  };
  handleInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleSearch = () => {
    this.props.searchMovies(this.state.searchInput);
    this.setState({
      searched: true,
    });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search a movie ...'
          onChange={this.handleInput}
        />
        <button onClick={this.handleSearch}> Search</button>
        <div>
          <h1>List of Movies</h1>
          <ul></ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movie.movieList,
  isLoading: state.movie.isLoading,
  error: state.movie.error,
  errorMessage: state.movie.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovies: (query) => dispatch(searchMovies(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
