export const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this service really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our assessment and guidance are completely free. We make money when you work with one of our partner companies, not before."
        }
      },
      {
        "@type": "Question",
        "name": "Will this hurt my credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You already have a foreclosure notice, so your credit has been affected. Our solutions can help prevent further damage and some options actually help rebuild credit faster."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to sell my house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Most solutions help you keep your home. A cash sale is only one of seven options, and only if you choose it."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Take the assessment today (2 minutes) and get matched with solutions immediately. If you need a cash offer, qualified companies can provide one within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Is my information confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Completely. We don't share your information without permission. Everything you tell us stays private."
        }
      },
      {
        "@type": "Question",
        "name": "What if I cannot afford any solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We will show you every option available, including government programs and non-profit assistance you might not know about."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export const OrganizationSchema = () => {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NJ Foreclosure Guide",
    "url": "https://njforeclosureguide.org",
    "logo": "https://njforeclosureguide.org/images/logo-nj-foreclosure-guide.jpg",
    "description": "Free guidance and solutions for New Jersey homeowners facing foreclosure",
    "sameAs": [
      "https://njforeclosureguide.org"
    ],
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "help@njforeclosureguide.org"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
    />
  );
};

export const BreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
};
