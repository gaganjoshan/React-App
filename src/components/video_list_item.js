import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video; use {video} instead of arguments which is same as declaring and using a variable

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} assName="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem
