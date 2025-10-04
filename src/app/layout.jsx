import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Astrum - Your Global Future Begins Here",
    default: "Astrum - Your Global Future Begins Here",
  },
  description: "We guide ambitious Indian students to top global universities with mentorship, funding & visa success.",
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-white text-base antialiased text-primary-800"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
