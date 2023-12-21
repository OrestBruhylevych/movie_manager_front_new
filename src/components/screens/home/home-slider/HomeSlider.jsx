import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import CardSlider from './CardSlider';

import './HomeSlider.scss';

function HomeSlider({ films, title, moreUrl, classPrevBtn, classNextBtn }) {
    return (
        <>
            <div className="section home-slider">
                <div className="container">
                    <div className="home-slider--top">
                        <h2 className="home-slider--top-title">{title}</h2>
                        <div className="home-slider--top-nav">
                            <div className={classPrevBtn}>prev</div>
                            <div className={classNextBtn}>next</div>
                        </div>
                        <a
                            href={moreUrl}
                            className="home-slider--top-more-btn btn-primary"
                        >
                            <span>Більше</span>
                        </a>
                    </div>
                    <div className="home-slider--bottum">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={'auto'}
                            centeredSlides={true}
                            loop={true}
                            navigation={{
                                nextEl: '.home-slider--top-nav-next',
                                prevEl: '.home-slider--top-nav-prev',
                            }}
                        >
                            {films?.map(s => {
                                return (
                                    <SwiperSlide key={s.name}>
                                        <CardSlider
                                            img={s.imageURL}
                                            name={s.name}
                                            year={s.releaseName}
                                            originName={s.originalName}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

HomeSlider.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape).isRequired,
    title: PropTypes.string.isRequired,
    moreUrl: PropTypes.string.isRequired,
    classNextBtn: PropTypes.string.isRequired,
    classPrevBtn: PropTypes.string.isRequired,
};

export default HomeSlider;
