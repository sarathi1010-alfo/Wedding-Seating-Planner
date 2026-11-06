import Script from "next/script";

interface AnalyticsBlockProps {
  gaId?: string; // GA4 Measurement ID, e.g., G-HZQ3QT11QC
  gtmId?: string; // GTM Container ID, e.g., GTM-XXXXXXX
}

export function AnalyticsBlock({ gaId = "G-HZQ3QT11QC", gtmId }: AnalyticsBlockProps) {
  return (
    <>
      {/* Google Analytics (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
            window['ga-disable-${gaId}'] = true;
          } else {
            gtag('config', '${gaId}', {
              cookie_domain: 'auto',
              linker: { domains: ['alfo.online', 'sm-clinics.vercel.app', 'pdfutility.app'] },
              cookie_flags: 'SameSite=None;Secure'
            });
          }
        `}
      </Script>

      {/* Google Tag Manager (Head) - Only loaded if valid GTM container ID is provided */}
      {gtmId && gtmId.startsWith('GTM-') && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}
    </>
  );
}

export function GTMNoScript({ gtmId }: { gtmId?: string }) {
  if (!gtmId || !gtmId.startsWith('GTM-')) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
