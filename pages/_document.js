import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "event",
      "name": "Acunetix",
      "logo": "https://acunetix.tech/image/logo.png"
      "url: "https://acunetix.tech"
      "url: "https://www.acunetix.tech"
      "image": [
        "https://drive.google.com/uc?export=view&id=1cI4tLK2RyyDv0EKRi_J6-S07FyPuOWzK",
        "https://drive.google.com/uc?export=view&id=1G_9bHYn0a5B4PyxGML4skBYaK5MVQV82",
        "https://drive.google.com/uc?export=view&id=1Q2yiNtpMKksxXfR2jj8jL-80_aLnJHc1"
      ],
      "description": "ACUNETIX is one of the largest events | ACUNETIX 10.0 9TH-11TH March 2023.",
      "event": {
        "@type": "event",
        "name": "Acunetix",
        "url: "https://acunetix.tech/event"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "acunetix",
          "name": "ACUNETIX is one of the largest events | ACUNETIX 10.0 9TH-11TH March 2023."
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url: "https://acunetix.tech/event",
        "priceCurrency": "INR",
        "price": "50.0",
        "priceValidUntil": "2023-03-8",
      }
    }
  `,
    };
  }
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="ACUNETIX 10.0" />
        <meta
          property="og:description"
          content="ACUNETIX is one of the largest events | ACUNETIX 10.0 9TH-11TH March 2023"
        />
        <meta property="og:site_name" content="Acunetix" />
        <meta property="og:url" content="https://acunetix.tech/" />
        <meta property="og:image" src="/image/logo.png" />
        <meta
          property="article:publisher"
          content="https://www.instagram.com/acunetix.dit/"
        />
        <meta property="og:see_also" content="http://www.acunetix.tech" />
        <meta
          name="description"
          content="ACUNETIX is one of the largest events - Acunetix 2022-2023"
          key="desc"
        />
        <meta
          name="keyword"
          content="acunetix, event, dy patil, acunetix10, acunetix-10, dyp, ACUNETIX,game, pimpri, pune,metaverse, vr, ar, , tech, acunetix tech, computer, party, Treasure Trove, UXplorer, Brainiac, DPL, Innovatia, ml ops, gamestorm, Asia,Technology,Science ,Scientific,Tech,Events ,Submerged,aquatic,journey,submarine,plants,Water,memories,Covid,festival,excitement,fantasty art,tech festival copenhangen,tech festival amsterdam,tech festival india,bombay techfest,mumbai,dates,march,9th - 11th,offline,online,Asia's largest science and technology festival,techfest app,Ocean,Multitute,spectacles,glasses,waterfall,volcanoes,deep,sea,giants,bioluminescent,beach,ancient,civilizations,Oceanography,Dr. Gene Feldman,NASA,Space,Mars,animals ,Earth,mystery,realm,sumberged ,submerged sojourn,deep sea,underwater,deep exploration,aquatic,underwater technology, dr dy patil institute of technology, iit, Dr. DY Patil Institute of Technology - Dr. DY Patil Unitech Society, dpu"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Burhanuddin Marcha" />
        <meta
          name="google-site-verification"
          content="EQPllv4yOfMZ3t9RXE0Uxqs8Rul432nBiJMab-lKYzI"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
        <link rel="icon" type="image/png" href="/image/logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7297047240840346"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
