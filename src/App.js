 
import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import HomiesHeader from '../src/gnav/header';
import HomePage from '../src/pages/home';
import postadd from '../src/pages/postadd';
import ViewDetails from '../src/pages/viewdetail';
import HomiesFooter from '../src/gnav/footer';
import Houses from '../src/pages/houses';
import MyAccount from '../src/pages/myaccount';
 
import '../src/resource/externalLibs/css/main.css';

export default function App() {
  return (
    <div>
      <HomiesHeader/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/postadd" component={postadd} />
        <Route path="/home" component={Houses} />
        <Route path="/viewdetails" component={ViewDetails} /> 
        <Route path="/myaccount" component={MyAccount} /> 
      </Switch>
      </BrowserRouter>
      <HomiesFooter/>
    </div>
  );
}
