import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Docs: NextPage = () => {
  return (
    <>
      <Head>
        <title>docs</title>
      </Head>
      <main>
        <Link href="/docs/privacy-policy">
          <a>
            <h2>Privacy Policy &rarr;</h2>
            <p>개인정보 처리방침</p>
          </a>
        </Link>
        <Link href="/docs/terms-of-service">
          <a>
            <h2>Terms Of service&rarr;</h2>
            <p>서비스 이용약관</p>
          </a>
        </Link>
        <Link href="/docs/location-based-terms-of-service">
          <a>
            <h2>Terms Of service&rarr;</h2>
            <p>위치기반 서비스 이용약관</p>
          </a>
        </Link>
      </main>
    </>
  );
};

export default Docs;
