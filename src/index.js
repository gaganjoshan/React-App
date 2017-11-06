import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAxBoBZnA_aNGtd30CilnALcC13Zp0-A7Q';

// Create a new component that produces some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('punjabi latest');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
