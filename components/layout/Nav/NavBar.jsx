import { useEffect, useState } from 'react';
import { BrowserView, MobileView} from 'react-device-detect';
import NavDesktop from "./desktop/NavDesktop";
import NavMobile from "./mobile/NavMobile";

import {user} from '../../../lib/user'

const NavBar = ({home, cart}) => {
    const [mounted, setMounted] = useState(false)
    const logo= '/logo/logo_blanco.png'

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted && (
        <>
            <BrowserView>
                <NavDesktop logo={logo} home={home} cart={cart} quantity={user.cart.length} user={user}/>
            </BrowserView>
            <MobileView>
                <NavMobile logo={logo} home={home} cart={cart} quantity={user.cart.length} user={user}/>
            </MobileView>
        </>
    )
};

export default NavBar;