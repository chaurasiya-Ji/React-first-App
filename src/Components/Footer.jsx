import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
    <div class="f-info">
        <div class="f-info-socials">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
       <div class="f-info-brand"> &copy;Code Private Limited</div> 
       <div class="f-info-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
       </div>
    </div>
</footer>
  )
}

export default Footer;

