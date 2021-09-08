import { useEffect, useState } from 'react';

import { Button } from './Button';

import { api } from '../services/api';

interface SideBarProps {
  clickButton: (id: number) => void;
  selectedGenreId: number;
}

import { GenreResponse } from '../interfaces/GenreResponse';

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return(
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.clickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  );
}