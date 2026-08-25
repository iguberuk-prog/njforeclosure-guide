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
    "@id": "https://njforeclosureguide.org/#organization",
    "name": "NJ Foreclosure Guide",
    "url": "https://njforeclosureguide.org",
    "logo": "https://njforeclosureguide.org/images/logo-nj-foreclosure-guide.jpg",
    "description": "Free guidance and solutions for New Jersey homeowners facing foreclosure",
    "telephone": "+1-908-603-1100",
    "email": "help@njforeclosureguide.org",
    "sameAs": [
      "https://njforeclosureguide.org"
    ],
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+1-908-603-1100",
        "email": "help@njforeclosureguide.org",
        "areaServed": "US-NJ",
        "availableLanguage": ["English", "Spanish"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
    />
  );
};

// ProfessionalService carries the phone, service area, and hours that local and
// AI search surfaces read. No street address is claimed, because this is a
// statewide online resource rather than a walk-in office.
export const LocalBusinessSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://njforeclosureguide.org/#localbusiness",
    "name": "NJ Foreclosure Guide",
    "url": "https://njforeclosureguide.org",
    "image": "https://njforeclosureguide.org/images/logo-nj-foreclosure-guide.jpg",
    "logo": "https://njforeclosureguide.org/images/logo-nj-foreclosure-guide.jpg",
    "description":
      "Free educational resource for New Jersey homeowners facing foreclosure. Explains the NJ judicial foreclosure timeline and connects homeowners with HUD counselors, the state mediation program, attorneys, cash buyers, and listing agents.",
    "telephone": "+1-908-603-1100",
    "email": "help@njforeclosureguide.org",
    "priceRange": "Free",
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "knowsAbout": [
      "New Jersey Fair Foreclosure Act",
      "Notice of Intention to Foreclose",
      "Sheriff sale adjournment",
      "New Jersey foreclosure mediation program",
      "Loan modification",
      "Short sale",
      "Cash home sale before a sheriff sale"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
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
