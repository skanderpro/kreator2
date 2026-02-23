import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

function Layout() {
  return (
    /**
     * Markup to render only the content of pages, and elements that are repeated on each page are loaded only once 
     * 
     * This markup is also used to attach a footer to the bottom
     */
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export { Layout }
