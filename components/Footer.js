import React from 'react';

const Footer = () => {
   return (
      <footer>
         <h2
            onClick={() => {
               window.scroll({
                  top: 0,
                  behavior: 'smooth',
               });
            }}
         >
            Tomiwa <span>Adelae</span>
         </h2>

         <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
         </div>

         <p>&copy; Tomiwa Adelae 2022</p>
      </footer>
   );
};

export default Footer;
