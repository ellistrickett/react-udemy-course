import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45pm" 
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:00am" 
        content="That's really cool!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 5:00pm" 
        content="Great job!"
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));