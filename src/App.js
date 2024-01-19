// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Listingtable from './Page/Listingtable';
import Ownerview from './Page/Ownerview';
import OurAgent from './Page/OurAgent';
import Contactus from './Page/Contactus';
import Aboutus from './Page/Aboutus';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './Page/Login';
import Propertyview from './Page/Propertyview';
import Viewproperty from './Page/Viewproperty';



library.add(faAngleDown, faAngleRight);



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/listingtable'} element={<Listingtable />} />
        <Route path={'/ownerview'} element={<Ownerview />} />
        <Route path={'/ouragent'} element={<OurAgent />} />
        <Route path={'/contactus'} element={<Contactus />} />
        <Route path={'/aboutus'} element={<Aboutus />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/propertyview'} element={<Propertyview />} />
        <Route path={'/viewproperty'} element={<Viewproperty />} />










      </Routes>
    </BrowserRouter>
  );
}

export default App;
