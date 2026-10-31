import Script from "next/script";

interface AnalyticsBlockProps {
  gaId?: string;
  gtmId?: string;
}

export function AnalyticsBlock({ gaId = "G-HZQ3QT11QC" }: AnalyticsBlockProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            cookie_domain: 'auto'
          });
        `}
      </Script>
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
