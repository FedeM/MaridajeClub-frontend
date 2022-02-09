import { DataUser, FeaturedInfo } from '../../../common';
import style from './ProfileHome.module.css'

const Profilehome = () => {
    return (
        <div className={style.profileHomeContainer}>
            <FeaturedInfo/>
            <DataUser/>
        </div>
    );
};

export default Profilehome;