import Image from "next/image";
import HeaderRight from "./HeaderRight";
import {
  BeakerIcon,
  BellIcon,
  ChevronDownIcon,
  ClipboardCheckIcon,
  CogIcon,
  InboxIcon,
  LoginIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import Dashboardmenu from "./Dashboardmenu";
function Header() {
  return (
    <div className="">
      <div className="shadow-md   px-10 py-4 bg-gray-800 text-white">
        <div className="relative">
          <div className="relative mr-3 flex items-center cursor-pointer  h-10">
            <Image
              src="https://www.freepnglogos.com/uploads/nbc-png-logo/play-games-nbc-png-logo-16.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className="absolute left-20 top-0">
            <h1 className="font-bold mb-0 pb-0 text-2xl">entorOcean.com</h1>
            <p className=" text-xs pt-0 mt-0">
              Guided Approach Guranteed Success
            </p>
          </div>
        </div>
        <div className="space-x-6 mr-3 shadow-md  absolute flex items-center cursor-pointer right-0 top-5">
          <div className="hidden shadow-md md:inline-flex space-x-6">
            <HeaderRight Icon={SearchIcon} title="Search" />
            <HeaderRight Icon={UserIcon} title="Tech" />
            <HeaderRight Icon={QuestionMarkCircleIcon} title="Help" />
            <HeaderRight Icon={LoginIcon} title="Login" />
          </div>
          <p className="px-2 text-sm py-2 bg-green-600 text-white rounded-sm ">
            Join For Free
          </p>
        </div>
      </div>
      <div className=" bg-yellow-500 h-16  justify-between flex items-center">
        <div className=" space-x-6 px-6 flex items-center">
          <Dashboardmenu title="Dashboard" Icon={ClipboardCheckIcon} />
          <Dashboardmenu title="Dashboard" Icon={ChevronDownIcon} />
          <Dashboardmenu title="Buying" Icon={ChevronDownIcon} />
          <Dashboardmenu title="Contacts" Icon={BellIcon} />
          <Dashboardmenu title="Inbox" Icon={InboxIcon} />
          <Dashboardmenu title="Setting" Icon={CogIcon} />
        </div>
        <div className="">
          <div className="font-bold mr-10  sm:text-center text-white  space-x-6">
            <a href="/">Messages</a>
            <a href="/">Lists</a>
            <a href="/">Orders</a>
            <a href="/">User</a>
             <a className="px-3 outline-white py-1 text-green-700" href="/">$44,980</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
