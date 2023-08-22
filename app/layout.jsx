import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "InvestInRw",
    description: 'Discover & Share business opportunities via AI'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className='Main'>
                <div  className="gradient" />
            </div>

            <main className='app'>
                <Nav />
                 {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout