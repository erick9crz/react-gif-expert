export const GifItem = ({title, url}) => {

    return (
        <div className="c-card">
            <div className="c-card__img">
                <img src={ url } alt={ title } />
            </div>
            <div className="c-card__title">
                <p>{ title }</p>
            </div>
        </div>
    )
}