import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import PageHead from "~/components/PageHead";
import Spinner from "~/components/ui/Spinner";
import TextAreaInput from "~/components/ui/TextAreaInput";
import { api } from "~/utils/api";

type SendMessageForm = {
  message: string
}

const ListingView: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit, reset } = useForm<SendMessageForm>();
  const sendMessage = api.listings.sendMessage.useMutation()
  const onSubmit = async (formData: SendMessageForm) => {
    try {
      await sendMessage.mutateAsync({
        listingId: id as string,
        message: formData.message
      })

      reset();
    } catch (error) {
     console.log(error) 
    }
  }

  let listing = api.listings.get.useQuery({
    listingId: id as string
  }, {
    enabled: !!id
  });
  
  const user = useUser();

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
        <div className="container mx-auto">
        <h1 className="mt-8 pl-8 text-4xl bold"> {listing.name} </h1>
        <h5 className="mt-8 pl-8 text-2xl bold"> {listing.description} </h5>
        <h5 className="mt-8 pl-8 text-2xl bold"> $ {listing.price} </h5>

        {user.isSignedIn && (
          <form
            className="mt-8 flex flex-col gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextAreaInput
              label="Message"
              name={"message"}
              register={register}
            />
            <button
              type="submit"
              className="mb-2 mr-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Send Message
            </button>
          </form>
        )}
        </div>
      </main>
    </>
  )
};

export default ListingView;
