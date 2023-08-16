import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import HomeScreen from '../Home/Home'
import Course from '../Course'
import SideBar from '../../components/SideBar'
import Content from '../../components/Content'
import SidebarShadow from '../../components/SidebarShadow'
import Test from '../../components/Test'


export default function DefaultLayout() {
  return (
    <>
      <div className="default-layout min-vh-100">
        <SidebarShadow></SidebarShadow>
        <SideBar></SideBar>
        <div className="container-fluid p-0">
          <Content></Content>
        </div>
      </div>

    </>
  )
}
