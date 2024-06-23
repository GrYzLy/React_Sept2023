import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import About from './About';
import NotFound from './NotFound';
import Search from './Search'
const RouterReact = props => (
<Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
</Router>
)


export default RouterReact;

