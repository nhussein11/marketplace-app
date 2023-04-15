import { NextPage } from "next";
import { useForm } from "react-hook-form";
import PageHead from "~/components/PageHead";
import NumberInput from "~/components/ui/NumberInput";
import TextAreaInput from "~/components/ui/TextAreaInput";
import TextInput from "~/components/ui/TextInput";

type SellItemForm = {
  name: string;
  description: string;
  price: number;
};

const SellItem: NextPage = () => {
  const { register, handleSubmit } = useForm<SellItemForm>();
  const onSubmit = (formData: SellItemForm) => console.log(formData);

  return (
    <>
      <PageHead title="Sell Item" description="sell item" />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-700">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl text-white">
            Here is where you can sell your item
          </h1>
          {/*
            TODO: split the following into react components
          */}
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput label="Name" register={register} name={"name"} />
            <TextAreaInput
              label="Description"
              register={register}
              name={"description"}
            />
            <NumberInput label="Price" register={register} name={"price"} />
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
