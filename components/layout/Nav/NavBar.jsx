import { useEffect, useState } from 'react';
import { BrowserView, MobileView} from 'react-device-detect';
import NavDesktop from "./desktop/NavDesktop";
import NavMobile from "./mobile/NavMobile";

const NavBar = () => {
    const [mounted, setMounted] = useState(false)
    const logo= '/logo/logo_blanco.png'

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted && (
        <>
            <BrowserView>
                <NavDesktop 
                    logo={logo}
                />
            </BrowserView>
            <MobileView>
                <NavMobile 
                    logo={logo}
                />
            </MobileView>
        </>
    )
};

export default NavBar;