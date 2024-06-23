import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import Contact  from "./Contact";
import Bio from "./Bio"


const About = props => (
<div><h1>About </h1>

<Routes>
    <Route path={`/about/contact`} element={<Contact />} />
    <Route path={`/about/bio`} element={<Bio />} />
</Routes>

</div>

)
export default About;

