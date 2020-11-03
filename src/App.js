import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import { Switch, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App() {
  return (
    <div className='App'>
      <HeaderContainer />
      <NavBarContainer />
      <main>
        <Switch className='main_wrapper'>
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
