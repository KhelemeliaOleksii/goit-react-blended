import './App.css';
import { useState, useEffect } from 'react'
import { getFilms } from './services/api';
import { mapper } from './Utils/Mapper'
import Button from './component/Button';
import { GallaryList } from './component/Gallary/GallaryList/GallareList';
import Modal from './component/Modal';
//робити запит при завантаженні
//loader
//копка
//modal
//шаблон

export function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getFilms(page)
      .then((results) => {
        const nextMovie = mapper(results);
        setMovies((prevMovies) => [...prevMovies, ...nextMovie]);
      }
      )
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [page])

  const onClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  }
  const openModal = (image) => {
    setImage(image);
  }
  const closeModal = () => {
    setImage('');
  }
  const toggleWatched = (id) => {
    this.setState((prevState) => (
      {
        movies: prevState.movies.map((movie) => {
          if (movie.id === id) {
            return {
              ...movie,
              isWatched: !movie.isWatched,
            };
          }
          return movie;
        })
      }
    )
    )
  }
  return (

    <>
      <GallaryList movies={movies} toggleWatched={toggleWatched} openModal={openModal} />
      {isLoading && <div>Loading...</div>}
      <Button onClick={onClick} />
      {image && <Modal img={image} closeModal={closeModal} />}

    </>
  )
}

export default App;
