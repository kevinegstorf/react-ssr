import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div> I'm the super super awesome home component</div>
      <button onClick={()=> { console.log('Hi there!')}}>Press Me!</button>
    </div>
  );
};

export default {
  component: HomePage
};
