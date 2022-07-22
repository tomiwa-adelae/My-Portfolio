import Link from 'next/link';
const Interested = () => {
   return (
      <div className="interested">
         <div className="content">
            <h3>Interested in working with me?</h3>
            <p>
               I'm always willing to talk about product design and development
               work, as well as partnership opportunities.
            </p>
            <Link href="/contact">
               <div className="btn btn-primary">Start a converstion</div>
            </Link>
         </div>
      </div>
   );
};

export default Interested;
