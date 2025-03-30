import '../styles/globals.scss'
import Head from 'next/head';
import Header from '../components/Header/Header'; // Headerコンポーネントをインポート
import Footer from '../components/Footer/Footer'; // Footerコンポーネントをインポート

export default function RootLayout({ children }) {
  return (
    <html lang="ja"> {/* lang属性を日本語に変更 */}
      <Head>
        <title>Stylist Landing Page</title>
        <meta name="description" content="Stylist Landing Page using Next.js App Router" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header /> {/* Headerを追加 */}
          <main style={{ flex: 1 }}> {/* mainコンテンツが利用可能なスペースを確保するようにする */}
            {children}
          </main>
          <Footer /> {/* Footerを追加 */}
        </div>
      </body>
    </html>
  )
}
