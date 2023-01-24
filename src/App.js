import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './componentes/pages/Home';
import Contact from './componentes/pages/Contact';
import Company from './componentes/pages/Company';
import NewProject from './componentes/pages/NewProject';

import Container from './componentes/layout/Container';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import Projects from './componentes/pages/Projects';
import Project from './componentes/pages/Project';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
            <Route exact path="/" > 
              <Home />
             </Route>
             <Route  path="/projects" >
              <Projects />
             </Route>
            <Route  path="/company" >
              <Company />
             </Route>
            <Route  path="/contact" >
              <Contact />
             </Route>          
            <Route  path="/newproject" > 
              <NewProject />
             </Route> 
             <Route  path="/project/:id" > 
              <Project />
             </Route>            
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
