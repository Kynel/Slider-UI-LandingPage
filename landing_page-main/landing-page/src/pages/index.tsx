import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import IndexPageContainer from 'components/indexPage/indexPageContainer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <IndexPageContainer />
    </>
  );
};

export default Home;
