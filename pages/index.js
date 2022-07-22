import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Icon from '../components/Icon';
import Interested from '../components/Interested';
import Meta from '../components/Meta';
import Showcase from '../components/Showcase';
import Skills from '../components/Skills';

export default function Home() {
   return (
      <div>
         <Meta />
         <Showcase />
         <About />
         <CaseStudies />
         <Skills />
         <Interested />
         <Icon />
      </div>
   );
}
