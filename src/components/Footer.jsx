import React from 'react'
import './Footer.css'

export default function Footer() {
 var currentYear = new Date().getFullYear()
    return (
        <footer className="page-footer blue lighten-2">
          <div className="container">
          © In {currentYear} has been created
          <a className="grey-text text-lighten-4 right" href="/">More Links</a>
          </div>
      </footer>
    )
}