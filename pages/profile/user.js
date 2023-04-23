import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const UserProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 100,
    purchases: [
      {
        vendor: "Acme Corp.",
        product: "Widget Blueprint",
        price: 20,
      },
      {
        vendor: "Globex Inc.",
        product: "PowerPoint Template",
        price: 15,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-lg p-8">
      <div className="flex items-center mb-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full"></div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="">{user.email}</p>
        </div>
      </div>
      <div className="rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
          <h3 className="text-lg font-medium">Account Balance</h3>
        </div>
        <p className="text-2xl font-bold">${user.balance.toFixed(2)}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
        <ul className="rounded-lg shadow-md divide-y divide">
          {user.purchases.map((purchase, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4"
            >
              <div>
                <p className="text-lg font-medium">
                  {purchase.vendor} - {purchase.product}
                </p>
                <p className="">
                  ${purchase.price.toFixed(2)}
                </p>
              </div>
              <button className="px-4 py-2 rounded-lg flex items-center">
                <FontAwesomeIcon
                  icon={faDownload}
                  className="mr-2"
                />
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
