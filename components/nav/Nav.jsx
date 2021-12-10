import { useEffect, useState } from 'react';
import { BrowserView, MobileView} from 'react-device-detect';
import NavDesktop from "./desktop/NavDesktop";
import NavMobile from "./mobile/NavMobile";

const Nav = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted && (
        <>
            <BrowserView>
                <NavDesktop/>
            </BrowserView>
            <MobileView>
                <NavMobile/>
            </MobileView>
        </>
    )
};

export default Nav;