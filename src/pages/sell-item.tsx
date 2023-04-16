import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import PageHead from "~/components/PageHead";
import NumberInput from "~/components/ui/NumberInput";
import TextAreaInput from "~/components/ui/TextAreaInput";
import TextInput from "~/components/ui/TextInput";
import { api } from "~/utils/api";

type SellItemForm = {
  name: string;
  description: string;
  price: string;
};

const SellItem: NextPage = () => {
  const createListing = api.listings.create.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<SellItemForm>();
  const onSubmit = (formData: SellItemForm) => {
    try {
      createListing.mutateAsync({
        ...formData,
        price: parseFloat(formData.price),
      }).then(() => {
        router.push("/");
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <PageHead title="Sell Item" description="sell item" />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-700">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl text-white">
            Create a new listing to sell your item
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput label="Name" name={"name"} register={register} />
            <TextAreaInput
              label="Description"
              name={"description"}
              register={register}
            />
            <NumberInput label="Price" name={"price"} register={register} />
            <button
              type="submit"
              className="mb-2 mr-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SellItem;
