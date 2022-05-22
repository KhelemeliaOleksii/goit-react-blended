import propTypes from 'prop-types'
export const GallaryItem = ({ id, title, img, isWatched, toggleWatched, onClick }) => {

    return (
        <li className="Item" >
            <h2>{title}</h2>
            <p onClick={() => toggleWatched(id)}>{isWatched ? "Watched" : "Not watched"}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt={title}
                onClick={() => onClick(img)} />
        </li>
    )
}

GallaryItem.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    isWatched: propTypes.bool.isRequired,
    toggleWatched: propTypes.func.isRequired,
    onClick: propTypes.func.isRequired,
}
