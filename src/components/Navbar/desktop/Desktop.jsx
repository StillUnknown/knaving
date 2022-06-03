import css from './Desktop.module.css'
import {Link} from "react-router-dom";
import RoutingPath from "../../../router/RoutingPath";
import LinkedIn from '../../../utils/img/linkedin.png'
import Github from '../../../utils/img/github.png'

const Desktop = () => {
    return (

        <nav className={css.nav}>
            <div className={css.imgContainer}>
                <a href="https://www.linkedin.com/in/christoffer-knaving-77366a21a/" target="_blank"><img
                    className={css.image}
                    src={LinkedIn}
                    alt="linkedin"/></a>
                <a href="https://github.com/StillUnknown/Portfolie" target="_blank"><img className={css.image}
                                                                                         src={Github}
                                                                                         alt="github"/></a>
            </div>
            <div>
                <ul className={css.ul}>
                    <li className={css.li}>
                        <Link className={css.link} to={RoutingPath.contactView}>Contact</Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.link} to={RoutingPath.portfolioView}>Portfolio</Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.link} to={RoutingPath.aboutView}>About me</Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.link} to={RoutingPath.homeView}>Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Desktop