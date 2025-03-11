'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Logo from '../../../public/Assets/Header Logo All pages/Logo.png'
import Link from 'next/link'

const menuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [forceFixed, setForceFixed] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [navbarHeight, setNavbarHeight] = useState(0)

  // Synchronously measure navbar height to prevent layout flicker.
  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  }, [menuOpen, scrolled])

  // Monitor scroll position.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // When the menu is toggled open, immediately force fixed positioning.
  const handleMenuToggle = () => {
    if (!menuOpen) {
      setForceFixed(true)
    }
    setMenuOpen((prev) => !prev)
  }

  // When exit animation completes (and if not scrolled), remove forced fixed positioning.
  const handleExitComplete = () => {
    if (!menuOpen && !scrolled) {
      setForceFixed(false)
    }
  }

  // Close menu when clicking outside the container.
  useEffect(() => {
    if (!menuOpen) return

    const handleDocumentClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [menuOpen])

  // Close menu when any link is clicked.
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  // Determine container classes based on scroll or forced state.
  const containerClasses =
    forceFixed || scrolled ? 'fixed top-0 left-0 right-0 z-50' : ''
  const navbarBgClasses =
    forceFixed || scrolled
      ? 'bg-white bg-opacity-75 backdrop-blur-sm border-b border-black'
      : 'border-b border-black'

  return (
    <>
      <div className={containerClasses} ref={containerRef}>
        <motion.nav
          ref={navbarRef}
          className={`flex justify-between px-7 py-4 ${navbarBgClasses} items-center`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <Image src={Logo} alt='codegenix-company-logo' />

          {/* Essential desktop links */}
          <ul className='hidden md:flex space-x-4'>
            <Link href='/' onClick={handleLinkClick}>
              <li className='text-md text-gray-900 hover:text-gray-500'>
                Home
              </li>
            </Link>
            <Link href='/about' onClick={handleLinkClick}>
              <li className='text-md text-gray-900 hover:text-gray-500'>
                About
              </li>
            </Link>
            <Link href='/contact' onClick={handleLinkClick}>
              <li className='text-md text-gray-900 hover:text-gray-500'>
                Contact us
              </li>
            </Link>
          </ul>

          <button
            onClick={handleMenuToggle}
            className='bg-primary-green px-4 py-2 border border-black'>
            Menu
          </button>
        </motion.nav>

        <AnimatePresence onExitComplete={handleExitComplete}>
          {menuOpen && (
            <motion.div
              className={`px-7 py-4 border-b border-black overflow-hidden ${
                forceFixed || scrolled
                  ? 'bg-white bg-opacity-75 backdrop-blur-sm'
                  : ''
              }`}
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'>
              {/* Mobile: All links */}
              <ul className='flex flex-col space-y-4 md:hidden'>
                <Link href='/' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Home
                  </li>
                </Link>
                <Link href='/webdevelopment' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Websites
                  </li>
                </Link>
                <Link href='/mobiledevelopment' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Mobile Apps
                  </li>
                </Link>
                <Link href='/marketing' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Digital Marketing
                  </li>
                </Link>
                <Link href='/branding' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Branding
                  </li>
                </Link>
                <Link href='/training' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Training & Workshops
                  </li>
                </Link>
                <Link href='/about' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    About
                  </li>
                </Link>
                <Link href='/contact' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Contact us
                  </li>
                </Link>
              </ul>

              {/* Desktop: Only additional links */}
              <ul className='hidden md:flex md:flex-col space-y-4'>
                <Link href='/webdevelopment' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Websites
                  </li>
                </Link>
                <Link href='/mobiledevelopment' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Mobile Apps
                  </li>
                </Link>
                <Link href='/marketing' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Digital Marketing
                  </li>
                </Link>
                <Link href='/branding' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Branding
                  </li>
                </Link>
                <Link href='/training' onClick={handleLinkClick}>
                  <li className='text-md text-gray-900 hover:text-gray-500'>
                    Training & Workshops
                  </li>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer to maintain layout and prevent hero jumps */}
      {(forceFixed || scrolled) && <div style={{ height: navbarHeight }} />}
    </>
  )
}

export default Navbar
