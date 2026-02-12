import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    name?: string;
    type?: string;
    url?: string;
    image?: string;
}

export default function SEO({
    title,
    description = "Eventos únicos y talleres a medida. Doña Flora crea experiencias inolvidables alrededor de la mesa.",
    name = "Doña Flora",
    type = "website",
    url = window.location.href,
    image = "https://donafloraencuentros.com/og-image.jpg" // Imagen por defecto si tienes una, sino usa una url real
}: SEOProps) {

    const siteTitle = title.includes('| Doña Flora') || title.startsWith('Doña Flora') ? title : `${title} | ${name}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={description} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}

            {/* CÓDIGO NUEVO: Datos Estructurados para Google */}
            <script type="application/ld+json">
                {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Doña Flora",
        "url": "https://www.donafloraencuentros.com",
        "logo": "https://www.donafloraencuentros.com/favicon.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34 614 039 494",
          "contactType": "customer service"
        }
      }
    `}
            </script>
        </Helmet>

    );
}
