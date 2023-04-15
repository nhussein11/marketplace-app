import Head from 'next/head';

type HeadProps = {
  title: string;
  description: string;
};

const PageHead: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
