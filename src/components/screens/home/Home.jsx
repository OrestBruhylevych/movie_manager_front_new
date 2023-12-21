import Header from '../../header/Header';
import styles from './Home.module.scss';
import HomeSlider from './home-slider/HomeSlider';

import { films } from '../../../JSONs/serials.data.js';

const Home = () => {
    return (
        <>
            <Header />
            <HomeSlider
                title="Серіали"
                moreUrl="#moreUrl"
                films={films}
                classPrevBtn="home-slider--top-nav-prev btn-primary 1-prev-btn"
                classNextBtn="home-slider--top-nav-next btn-primary 1-next-btn"
            />
            <HomeSlider title="Фільми" moreUrl="#moreUrl" films={films} />
            <HomeSlider title="Мультсеріали" moreUrl="#moreUrl" films={films} />
        </>
    );
};

export default Home;
