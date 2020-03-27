import * as React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import {IImage} from "../types/ImageType";

interface IState {
  images: IImage[]
}

interface IProps {}

class App extends React.Component<IProps, IState> {
  state = { images: [] };

  onSearchSubmit = async (term: string) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;