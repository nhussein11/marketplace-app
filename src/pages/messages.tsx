import { type NextPage } from "next";
import PageHead from "~/components/PageHead";

import { api } from "~/utils/api";

const Messages: NextPage = () => {
  const messages = api.listings.getMessages.useQuery();

  return (
    <>
      <PageHead title="Messages" description="messages" />
    <main className="flex min-h-screen flex-col gap-12 bg-gray-800">
          <div className="container mx-auto">
            <h1 className="mb-8 mt-12 pl-4 text-4xl">Your Offers</h1>

            <div className="relative mb-16 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 text-center">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {messages.data?.map((message) => (
                    <tr
                      key={message.id}
                      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <td className="px-6 py-4">{message.fromUserName}</td>
                      <td className="px-6 py-4">{message.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
    </>
  );
};

export default Messages;
