import React, { useState } from 'react';
import './App.scss';
import { Table } from './components/Table/Table';
import { SearchFrom } from './components/SearchForm/SearchForm';
import { SideBar } from './components/SideBar/SideBar';
import { getVisibleWorkers } from './helpers/getVisibleWorkers';
import { Color } from './types/Color';
import { MenuIcon } from './components/Icon/Icon';
import { user, workers } from './data/data';

function App() {
  const [query, setQuery] = useState('');
  const [colorState, setColorState] = useState(Color.Gray);

  return (
    <div className="app">
      <div className='app__container'>
        <SideBar user={user} />

        <div className='app__main'>
          <a
            className='app__menu-button'
            onMouseOver={() => setColorState(Color.Purple)}
            onMouseLeave={() => setColorState(Color.Gray)}
            href='#menu'
          >
            <MenuIcon color={colorState} />
          </a>
          <h1 className='app__greetings'>Hello Evano 👋🏼,</h1>

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
