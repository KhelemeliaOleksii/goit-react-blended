import { GallaryItem } from '../GallaryItem/GallaryItem'
import propTypes from 'prop-types'

export const GallaryList = ({ movies, toggleWatched, openModal }) => {
    return (
        <ul>
            {movies.map(({ id, title, img, isWatched }) => <GallaryItem
                key={id}
                id={id}
                title={title}
                img={img}
                isWatched={isWatched}
                onClick={openModal}
            />
            )}
        </ul>
    )
}

GallaryList.propTypes = {
    movies: propTypes.arrayOf(propTypes.shape({
        img: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        id: propTypes.number.isRequired
    })),
    toggleWatched: propTypes.func.isRequired,
    openModal: propTypes.func.isRequired,
}

