import { type NextPage } from "next";
import { useRouter } from "next/router";
import PageHead from "~/components/PageHead";
import Spinner from "~/components/ui/Spinner";
import { api } from "~/utils/api";

const ListingView: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  let listing = api.listings.get.useQuery({
    listingId: id as string
  }, {
    enabled: !!id
  });

  if (!listing.data) {
    return (
      <Spinner />
    )
  }

  listing = listing.data;

  return (
    <>
      <PageHead title="Listing" description="Listing"/>

      <main className="flex min-h-screen flex-col bg-gray-700 gap-12">
        <h1 className="mt-8 pl-8 text-4xl bold"> Listing </h1>

        <pre className="pl-8">
          {JSON.stringify(listing, null, 2)}
        </pre>
      </main>
    </>
  )
};

export default ListingView;
