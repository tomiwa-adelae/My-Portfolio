import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
   return (
      <Head>
         <title>{title}</title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta name="keywords" content={keywords} />
         <meta name="description" content={description} />
         <meta charSet="utf-8" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
};

Meta.defaultProps = {
   title: 'Tomiwa Adelae',
   keywords:
      'Tomiwa, Adelae, Tomiwa Adelae, Portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack',
   description:
      'Tomiwa Adelae Portfolio, Greatest website developer in the world',
};

export default Meta;
