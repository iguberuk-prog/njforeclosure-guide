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
          "text": "Yes, and there is no catch. We are paid by nobody. No referral fees, no commissions, no advertising money, and no affiliation with any company we mention. Nothing is ever charged to you."
        }
      },
      {
        "@type": "Question",
        "name": "Will this hurt my credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Missed payments and a foreclosure filing affect credit on their own. Acting earlier generally limits further damage, but the effect depends on your specific situation and none of the options here erase what has already been reported."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to sell my house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Several options are aimed at keeping the home, including loan modification, forbearance, reinstatement, the New Jersey court mediation program, and Chapter 13. Selling is one path among several and only if you choose it."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The assessment takes about two minutes and shows your options immediately. A free HUD-approved housing counselor can usually be reached the same week, and the New Jersey court mediation program runs alongside a filed case."
        }
      },
      {
        "@type": "Question",
        "name": "Is my information confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not sell your information and we do not share it with anyone unless you specifically ask us to make an introduction. See the privacy policy for exactly what is collected and how long it is kept."
        }
      },
      {
        "@type": "Question",
        "name": "What if I cannot afford any solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Several of the strongest options cost nothing. HUD-approved housing counseling is free, the New Jersey foreclosure mediation program is free for eligible homeowners, and free legal assistance may be available alongside it."
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
    "description": "Independent educational resource for New Jersey homeowners facing foreclosure. Paid by nobody and affiliated with nobody.",
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

// ProfessionalService carries the service area and topic expertise that local
// and AI search surfaces read. No telephone and no street address are claimed,
// because this is a statewide online resource with no phone line and no office.
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
      "Independent, free educational resource for New Jersey homeowners facing foreclosure. Explains the New Jersey judicial foreclosure timeline and the options available at each stage. Takes no referral fees, commissions, or advertising money, and has no affiliation with any company it mentions.",
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
