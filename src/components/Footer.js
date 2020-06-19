import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Get in <a href="/contact">contact.</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://tompluess.ch/">Tom Plüss</a>.
        </span>
      </div>
    </footer>
  </div>
)
