import css from './Menu.module.css'
import { Link } from "react-router-dom";
import RoutingPath from "../../../../router/RoutingPath";

const Menu = ( { toggleMenu } ) => {
    return (
        <div onClick={ toggleMenu }>
            <ul>
                <li>
                    <Link to={ RoutingPath.homeView }>HomeView</Link>
                </li>
                <li>
                    <Link to={ RoutingPath.aboutView }>AboutView</Link>
                </li>
                <li>
                    <Link to={ RoutingPath.portfolioView }>PortfolioView</Link>
                </li>
                <li>
                    <Link to={ RoutingPath.contactView }>ContactView</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu