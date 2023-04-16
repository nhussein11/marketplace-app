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
        <div className="container mx-auto ">
        <h1 className="mt-8 pl-8 text-4xl bold"> {listing.name} </h1>
        <h5 className="mt-8 pl-8 text-2xl bold"> {listing.description} </h5>
        <h5 className="mt-8 pl-8 text-2xl bold"> $ {listing.price} </h5>

        </div>
      </main>
    </>
  )
};

export default ListingView;
