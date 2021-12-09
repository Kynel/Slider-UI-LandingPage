import type { NextPage } from 'next';
import Head from 'next/head';
import CorporateContainer from 'components/corporate/corporateContainer';

const Corporate: NextPage = () => {
  return (
    <>
      <Head>
        <title>corporate</title>
        <CorporateContainer />
      </Head>
    </>
  );
};

export default Corporate;
