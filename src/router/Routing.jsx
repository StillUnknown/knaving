import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutingPath from './RoutingPath'
import HomeView from '../views/HomeView'
import ContactView from '../views/ContactView'
import AboutView from '../views/AboutView'
import PortfolioView from '../views/PortfolieView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> } />
                <Route path={ RoutingPath.aboutView } element={ <AboutView/> } />
                <Route path={ RoutingPath.portfolioView } element={ <PortfolioView/> } />
                <Route path={ RoutingPath.contactView } element={ <ContactView/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing