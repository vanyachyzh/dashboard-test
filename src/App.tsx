import React, { useState } from 'react';
import logo from './logo.svg';
import Menu from './images/burger-menu.svg';
import './App.scss';
import UserPhoto from './images/Man 8.png';
import { Worker } from './types/Worker';
import { Table } from './components/Table/Table';
import { SearchFrom } from './components/SearchForm/SearchForm';
import { SideBar } from './components/SideBar/SideBar';
import { getVisibleWorkers } from './helpers/getVisibleWorkers';
import { Color } from './types/Color';
import { MenuIcon } from './components/Icon/Icon';

const user = {
  name: 'Evano',
  position: 'Project Manager',
  photo: UserPhoto,
}

const workers: Worker[] = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: true,
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: false,
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: false,
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: true,
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: true,
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: true,
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: true,
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: false,
  },
]

function App() {
  const [query, setQuery] = useState('');
  const [colorState, setColorState] = useState(Color.Gray);

  return (
    <div className="App">
      <div className='container'>
        <SideBar user={user} />

        <div className='main'>
          <a
            className='menu-button'
            onMouseOver={() => setColorState(Color.Purple)}
            onMouseLeave={() => setColorState(Color.Gray)}
            href='#menu'
          >
            <MenuIcon color={colorState} />
          </a>
          <h1 className='greetings'>Hello Evano 👋🏼,</h1>

          <SearchFrom
            query={query}
            setQuery={setQuery}
          >
            <Table workers={getVisibleWorkers(workers, query)} />
          </SearchFrom>
        </div>
      </div>
    </div>
  );
}

export default App;
