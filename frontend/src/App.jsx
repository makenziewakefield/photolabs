import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photos = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Jane Doe",
    profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Vancouver",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "John Smith",
    profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  },
];


const App = () => {
  return (
    <div className="App">
      {photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
    </div>
  );
};

export default App;
