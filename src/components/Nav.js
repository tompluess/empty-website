import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './globalStyles.css'

const menuData = [
  { title: 'Home', link: '/' },
  { title: 'Components', link: '/components/' },
  { title: 'Contact', link: '/contact' },
]

const HamburgerButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="self-end" >
    <svg className="w-16 h-16 fill-current text-white" viewBox="0 0 41 41">
      {/* TODO: alt text translation */}
      <title>Menu</title>
      <circle cx="20.5" cy="20.5" r="20.5" />
      <path
        stroke="var(--primary)"
        strokeWidth="2"
        d="M0 10 H41 M0 25 H41 M0 40 H41"
      />
    </svg>
  </button>
)

const CrossButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="self-end" >
    <svg className="w-16 h-16 fill-current text-white" viewBox="0 0 41 41">
      <g
        clipPath="url(#clip0)"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeMiterlimit="10"
      >
        <path d="M5 9 L37 41 M5 41 L37 9" />
      </g>
    </svg>
  </button>
)

HamburgerButton.propTypes = {
  onClick: PropTypes.func
}
const MenuItem = ({ menuItem, className }) => (
  <div className={className}>
    <Link to={menuItem.link} className={className}>
      <span className="text-3xl text-thin">{menuItem.title}</span>
    </Link>
  </div>
)

export default ({ subNav }) => {
  const [navigationOpen, setNavigationOpen] = useState(false)

  const openMenu = () => setNavigationOpen(true)
  const closeMenu = () => setNavigationOpen(false)

  return (
    <>
      <header className="fixed z-20 w-full flex flex-col top-0 p-8 mx-auto bg-white">
        <nav>
          <div className="flex flex-row justify-between items-center w-11/12 max-w-screen-lg mx-auto ">
            <a href="/">
              <Logo />
            </a>
            <div className="md:hidden">
              {navigationOpen ? (
                <CrossButton onClick={closeMenu} />
              ) : (
                <HamburgerButton onClick={openMenu} />
              )}
            </div>
            {menuData.map(menuItem => {
              return (
                <MenuItem
                  menuItem={menuItem}
                  className="hidden md:block text-right"
                />
              )
            })}
          </div>

          {navigationOpen ? (
            <div className="flex flex-col content-center md:hidden">
              {menuData.map(menuItem => {
                return (
                  <MenuItem
                    menuItem={menuItem}
                    className="flex items-center mx-auto my-4 "
                  />
                )
              })}
            </div>
          ) : (
            <div className="hidden" />
          )}
        </nav>
      </header>
    </>
  )
}
