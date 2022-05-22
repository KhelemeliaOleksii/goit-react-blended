
export function mapper(array) {
    return array.map(({ backdrop_path: img, id, title }) => ({
        id,
        title,
        img,
        isWatched: false,
    }))
}