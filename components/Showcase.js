const Showcase = () => {
   const scrollPage = () => {
      window.scroll({
         top: 420,
         behavior: 'smooth',
      });
   };
   return (
      <div className="showcase">
         <h1>
            Tomiwa <span>Adelae</span>
         </h1>
         <h5>Full Stack Web Developer</h5>
         <div onClick={scrollPage} className="icon">
            <i className="fas fa-angle-down"></i>
         </div>
      </div>
   );
};

export default Showcase;
