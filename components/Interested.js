import Link from 'next/link';
const Interested = () => {
   return (
      <div className="interested">
         <div className="content">
            <h3>Interested in collaborating with me?</h3>
            <p>
               I’m always open to discussing product design work or partnership
               opportunities.
            </p>
            <Link href="/contact">
               <div className="btn btn-primary">Start a converstion</div>
            </Link>
         </div>
      </div>
   );
};

export default Interested;
