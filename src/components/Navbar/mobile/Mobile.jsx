import Menu from './menu/Menu'
import {useRef, useState} from "react";
import Hamburger from './hamburger/Hamburger'

const Mobile = () => {
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef(null)
    const closeMenu = () => setShowMenu(false)

    const toggleMenu = () => {
        setShowMenu( !showMenu )
    }

    return (
        <nav>
            {showMenu
                ? <Menu toggleMenu={ toggleMenu }/>
                : <Hamburger toggleMenu={ toggleMenu }/>
            }
        </nav>
    )
}

export default Mobile