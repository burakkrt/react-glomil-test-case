import {HelmetProvider, Helmet} from 'react-helmet-async'

const helmetContext = {
  title: 'Glomil Teknoloji',
  desc: 'Test case study consisting of 3 pages with ReactJS and TailwindCss.',
  keywords: 'Glomil, Glomil Teknoloji, Portal, Bots, Sementi',
  author: 'https://github.com/burakkrt'
}

export default function HelmetAyncProvider({children}) {

  return <HelmetProvider context={helmetContext}>
    {children}
  </HelmetProvider>
}

export function CustomHelmet({title, noIndex}) {

  return (
    <Helmet>
      <title>{title || helmetContext.title}</title>
      <meta name="description" content={helmetContext.desc}/>
      <meta name="keywords" content={helmetContext.keywords}/>
      <meta name="author" content={helmetContext.author}/>
      {noIndex === true && <meta name="robots" content="noindex"/>}
    </Helmet>
  );
}