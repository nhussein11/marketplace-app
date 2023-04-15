import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";

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
      <Head>
        <title>Sell Item</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-700">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl text-white">
            Here is where you can sell your item
          </h1>
          {/*
            TODO: split the following into react components
          */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Name
              </label>
              <input
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("description", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                step="0.1"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("price", { required: true })}
              />
            </div>
            <button type="submit" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Create</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SellItem;
