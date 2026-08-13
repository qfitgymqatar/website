import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'
import AdminLayout from './admin/AdminLayout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Trainers from './pages/Trainers'
import TrainerDetails from './pages/TrainerDetails'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Portal Routes (No Header/Footer) */}
          <Route path="/admin/*" element={<AdminLayout />} />

          {/* Main Public Website Routes */}
          <Route path="*" element={
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/packages" element={<Packages />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/trainers" element={<Trainers />} />
                  <Route path="/trainer/:id" element={<TrainerDetails />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blog/:id" element={<BlogDetails />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          } />
        </Routes>
      </Router>
    </AdminProvider>
  )
}

export default App;
