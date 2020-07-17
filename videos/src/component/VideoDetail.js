import React from 'react';
import VideoList from './VideoList';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
  <div className="ui segment">
    <h4 className="ui header">{video.snippet.title}</h4>
  <p className="ui segment">{video.snippet.description}</p>
  </div>
  );
};

export default VideoDetail;