import { Helmet } from 'react-helmet-async';

const SEOMeta = ({ 
  title, 
  description, 
  keywords, 
  ogImage,
  canonicalUrl 
}) => {
  const siteTitle = 'EduRise Academy | IT Training Institute in Gandhinagar';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Gandhinagar's #1 IT Training Institute. Job-oriented courses in Web Development, Data Science, UI/UX Design, Digital Marketing and more with 100% placement support.";
  const defaultKeywords = 'IT training Gandhinagar, web development course, MERN stack, React training, Python course, data science, UI/UX design, digital marketing, placement';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEOMeta;
