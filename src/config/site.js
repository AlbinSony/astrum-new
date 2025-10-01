export function constructMetadata({
  title = "Astrum - Study Abroad Consultancy",
  description = "Astrum - Your trusted partner for global education and study abroad guidance.",
  image = "/astrum-logo.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KING_IN_JUNGLE",
    },
    icons,
    metadataBase: new URL("https://astrum-new.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
