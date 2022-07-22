import React, { useEffect, useState } from 'react';

const Icon = () => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      const changeHeaderBg = () => {
         if (window.scrollY >= 300) {
            setShow(true);
         } else {
            setShow(false);
         }
      };

      window.addEventListener('scroll', changeHeaderBg);
   }, []);

   return (
      show && (
         <div
            onClick={() => {
               window.scroll({
                  top: 0,
                  behavior: 'smooth',
               });
            }}
            className="icon-btn"
         >
            <i className="fas fa-angle-up"></i>
         </div>
      )
   );
};

export default Icon;
