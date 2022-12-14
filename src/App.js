import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Button, Navbar, Footer, SideBar, ThemeSettings, Sidebar, UserProfile } from './components';
import {Menus, AboutPage, AgendaBook, Calendar, Dashboard, Kanban, ShoppingList, TodoList, Editor } from './pages';

import { useStateContext } from './contexts/ContextProvider';



import './App.css';


const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>

            {/* SETTINGS BUTTON  */}
            <TooltipComponent content="Settings" postiion="Top">
              <button type='button'
              className='text-3xl p-3
              hover:drop-shadow-xl
              hover:bg-light-gray text-white'
              style={{ background: 'blue',
              borderRadius: '50%'}}>
                <FiSettings/>
              </button>
            </TooltipComponent>

            
          </div>
            {/* SIDEBAR */}
          {activeMenu? (
            <div className='w-72 fixed sidebar 
            dark:bg-secondary-dark-bg bg-white' >
              <Sidebar />
              </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
              </div>
          )}

          {/* NAV BAR */}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu? 'md:ml-72' : 'flex-2'}`
            }>
              <div className='fixed md:static bg-main-bg
               dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
              </div>
          
            <div>
              <ThemeSettings />


              {/* ROUTES */}
              <Routes>
                {/*  DASHBOARD */}
              <Route path='/' element={<Dashboard/>}/>

              {/* Pages */}
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/user' element={<UserProfile/>}/>
              <Route path='/menus' element={<Menus/>}/>

              {/* Apps */}
              <Route path='/todolist' element={<TodoList/>}/>
              <Route path='/shoppinglist' element={<ShoppingList/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/AgendaBook' element={<AgendaBook/>}/>
              <Route path='/kanban' element={<Kanban/>}/>
              <Route path='/editor' element={<Editor/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App