import Link from 'next/link';

const Header = () => {
   return (
      <header>
         <Link href="/">
            <h3>
               Tomiwa <span>Adelae</span>
            </h3>
         </Link>
         <Link href="/contact">
            <div className="btn btn-primary">Get In Touch</div>
         </Link>
      </header>
   );
};

export default Header;
