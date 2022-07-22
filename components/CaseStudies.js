import Link from 'next/link';
import React from 'react';

const CaseStudies = () => {
   return (
      <div className="casestudies">
         <div className="head">
            <strong>Case Studies</strong>
            <h4>Latest works</h4>
         </div>

         <div className="content">
            <div className="file-case case">
               <img src="files.jpg" alt="Files App" />
               <Link href="/files">
                  <div className="case-preview">
                     <span>
                        <h3>Files App</h3>
                        <p>あらゆる種類のファイルを追跡します</p>
                        <button className="btn btn-primary">
                           Case Study <i className="fas fa-angle-right"></i>
                        </button>
                     </span>
                  </div>
               </Link>
            </div>

            <div className="pick-case case">
               <img src="pick.jpg" alt="Pick Me Fashions" />
               <Link href="/pick">
                  <div className="case-preview">
                     <span>
                        <h3>Pick Me Fashions</h3>
                        <p>An online shopping website</p>
                        <button className="btn btn-dark">
                           Case Study <i className="fas fa-angle-right"></i>
                        </button>
                     </span>
                  </div>
               </Link>
            </div>

            <div className="day-case case">
               <img src="day.jpg" alt="D-Days" />
               <Link href="/days">
                  <div className="case-preview">
                     <span>
                        <h3>D-Days</h3>
                        <p>Keep tracks of birthdays</p>
                        <button className="btn btn-primary">
                           Case Study <i className="fas fa-angle-right"></i>
                        </button>
                     </span>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CaseStudies;
