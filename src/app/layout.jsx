import Script from 'next/script';
import { AdminProvider } from '@/context/AdminContext';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import '../index.css';
import '../App.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

export const metadata = {
  title: 'QFit Gym Qatar | Ladies & Gents Fitness Center in Mansoura',
  description: 'Experience the ultimate fitness journey at QFit Gym in Mansoura, Qatar. State-of-the-art equipment, expert trainers, and dedicated spaces for everyone.',
  openGraph: {
    title: 'QFit Gym Qatar',
    description: 'Transform your life at QFit Gym. Join the best fitness community in Doha.',
    url: 'https://qfitgymqatar.com',
    siteName: 'QFit Gym Qatar',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KGZJ6BNN" />
      <GoogleAnalytics gaId="G-PQLGTE1J04" />
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1160670982999800');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1160670982999800&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
