import Link from "next/link";

const NavigationMenu = () => {
  return (
    <div className="mx-auto flex flex-row bg-white justify-between shadow-sm">
      <div className="flex flex-column p-5">Health Explore</div>
      <div className="flex flex-column p-5">
        <ul className="flex flex-row ">
          <li className="mr-10">Profile</li>
          <li className="mr-10">Jobs</li>
          <li className="mr-10">Professional Network</li>
          <li className="mr-10">Lounge</li>
          <li className="">Salary</li>
        </ul>
      </div>
      <div className="flex flex-row p-5">
        <button type="button" class="mr-10 inline-flex items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          create job
        </button>
        <div className=""></div>
        <div className="">logout</div>
      </div>
    </div>
  );
};
export default NavigationMenu;
