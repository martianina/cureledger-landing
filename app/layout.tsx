import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Providers } from "~~/components/Providers";
import { MAILERLITE_ACCOUNT_ID } from "~~/lib/mailerlite";
import { metadataBase, siteUrl } from "~~/lib/site";
import "~~/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const defaultTitle = "Cureledger: patient-sovereign rare disease data";
const defaultDescription =
  "Cureledger is building patient-owned data infrastructure for 30 million Americans living with rare disease. Privacy by design. Data sovereignty by default.";

export const metadata: Metadata = {
  metadataBase,
  title: { default: defaultTitle, template: "%s | Cureledger" },
  description: defaultDescription,
  applicationName: "Cureledger",
  icons: { icon: "/favicon.png" },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cureledger",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-preview.png",
        width: 1432,
        height: 762,
        alt: "Cureledger, patient-sovereign rare disease data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    site: "@CureLedger",
    images: ["/og-preview.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* MailerLite Universal — once for all pages / forms; lives in <head> per vendor */}
        <Script
          id="mailerlite-universal"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,"script","https://assets.mailerlite.com/js/universal.js","ml");ml("account",${JSON.stringify(MAILERLITE_ACCOUNT_ID)});`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
