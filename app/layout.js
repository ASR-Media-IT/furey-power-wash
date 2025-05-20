import { Header, Footer } from '@/components/organisms'
import { createClient } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import './globals.scss'


export const metadata = {
  title: "Web Dev Kit",
  description: "",
  keywords: "",
  robots: "index, follow",
  openGraph: {
    siteName: "Web Dev Kit",
    title: "Web Dev Kit",
    description: "",
    image: "",
    locale: "en-us",
    type: "website",
  },
}
export default async function RootLayout(props) {
  const params = await props.params;

  const {
    lang
  } = params;

  const {
    children
  } = props;

  const client = createClient();
  const header = await client.getSingle('site_navigation', { lang: lang });
  return (
    <html lang="en">
      <body>
        <Header header={header} />
        {children}
        <Footer lang={lang} />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
