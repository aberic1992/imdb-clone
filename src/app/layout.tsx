import Header from '@/components/Header';
import './globals.css';
import Providers from './Providers';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'IMDB Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <NavBar />
          {/*SearchBox*/}

          {children}
        </Providers>
      </body>
    </html>
  )
}
