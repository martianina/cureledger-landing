import React from "react";
import Head from "next/head";

type MetaHeaderProps = {
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: string;
  children?: React.ReactNode;
};

// Images must have an absolute path to work properly on Twitter.
// We try to get it dynamically from Vercel, but we default to relative path.
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/` : "/";

export const MetaHeader = ({
  title = "CureLedger",
  description = "Verifiable Health Data Marketplace",
  image = "/assets/icon-violet.png",
  twitterCard = "summary_large_image",
  children,
}: MetaHeaderProps) => {
  const imageUrl = baseUrl + image;
  const twitterImageUrl = baseUrl + "/assets/icon-violet.png";

  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:image" content={twitterImageUrl} />

          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content={imageUrl} />

          <meta property="fc:frame:button:1" content="🛠️ GitHub" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://descilife.com" />

          <meta property="fc:frame:button:2" content="📃 Docs" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="https://rymedi.com/" />

          <meta property="fc:frame:button:3" content="Features →" />
          <meta property="fc:frame:post_url" content={`${baseUrl}api?id=1`} />
        </>
      )}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      {children}
    </Head>
  );
};
