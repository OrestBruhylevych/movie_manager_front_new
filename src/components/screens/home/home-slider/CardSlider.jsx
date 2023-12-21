import PropTypes from 'prop-types';

function CardSlider({ name, id, year, img, originName }) {
    return (
        <div className="card-slider" id={id}>
            <div className="card-slider--img">
                <img src={img} alt={name} />
            </div>
            <div className="card-slider--title">
                <div className="card-slider--title-name" title={name}>
                    {name}
                </div>
                <div className="card-slider--title-year">{year}</div>
            </div>
            <div className="card-slider--origin-name" title={originName}>
                {originName}
            </div>
        </div>
    );
}

CardSlider.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    year: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    originName: PropTypes.string.isRequired,
};

export default CardSlider;
