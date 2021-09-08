import React from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = React.useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar clickButton={handleClickButton} selectedGenreId={selectedGenreId}/>
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}