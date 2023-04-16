import { type NextPage } from "next";
import PageHead from "~/components/PageHead";
import Card from "~/components/ui/Card";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const listings = api.listings.list.useQuery();

  return (
    <>
      <PageHead title="Home" description="home" />
      <main className="flex min-h-screen flex-col bg-gray-700 gap-12">
        <h1 className="mt-8 pl-8 text-4xl bold"> Items for sale </h1>
        <div className="container grid grid-cols-4 items-center justify-center gap-4 px-12 py-6">
          {listings?.data?.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
