import { DataUser, FeaturedInfo } from '../../../common';
import style from './ProfileHome.module.css'

const ProfileHome = () => {
    return (
        <div className={style.profileHomeContainer}>
            <FeaturedInfo/>
            <DataUser/>
        </div>
    );
};

export default ProfileHome;