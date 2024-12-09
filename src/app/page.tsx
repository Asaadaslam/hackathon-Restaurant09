import Head from 'next/head';
import Hero from './components/Hero';
import CoffeeCategory from './components/CoffeeCategory';
import FooterHome from './components/FooterHome';
import FavouriteMenu from './components/FavouriteMenu';
import OurCheif from './components/OurCheif';
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Coffee App</title>
        <meta name="description" content="Best quality coffee makers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <CoffeeCategory />
        <FavouriteMenu />
        <OurCheif />
        <FooterHome />
      </main>
    </>
  );
};

export default Home;