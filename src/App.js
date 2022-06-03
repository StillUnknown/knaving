import Navbar from './components/Navbar/Navbar'
import Routing from "./router/Routing";
import './utils/styles/css/Global.css'
function App() {
    return (
        <>
            <Routing>
                <Navbar/>
            </Routing>

        </>
    );
}

export default App;
