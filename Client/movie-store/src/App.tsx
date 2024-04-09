import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './core/pages/home';
import AddMovies from './movies/add-movies/AddMovies';
import ListMovies from './movies/list-movies/ListMovies';
import MenuItem from './core/models/menu-item';
import Sidenav from './shared/sidenav';
import Box from '@mui/material/Box';

function App() {
  const menuItems: MenuItem[] = [
    {label: 'Home', route: '/home'},
    {label: 'Add', route: '/add'},
    {label: 'List', route: '/list'}
  ]

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav menuItems={menuItems}/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/add" element={<AddMovies />}/>
          <Route path="/list" element={<ListMovies />}/>
        </Routes>
      </Box>
    </>
  );
}

export default App;
