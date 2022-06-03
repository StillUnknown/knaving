import css from './Desktop.module.css'
import { Link } from "react-router-dom";
import RoutingPath from "../../../router/RoutingPath";

const Desktop = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default Desktop