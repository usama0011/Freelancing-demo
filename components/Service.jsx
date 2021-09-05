import { PaperClipIcon } from "@heroicons/react/outline";

function Service() {
  return (
    <div className=" bg-gray-100 h-full  ">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-gray-100 border-b">
          <h1 className="font-bold bg-gray-100   text-gray-700 text-2xl pt-6 pb-8">
            What Service Are You Looking For ?
          </h1>
          <div className="bg-white px-7 py-5 shadow-md">
            <h1 className="text-gray-900">
              Describe the service you are looking to purchase - please be as
              detailed as possible:
            </h1>
            <textarea
              className=" outline-none px-2 py-3 mt-3  border text-gray-500 mb-2 flex-shrink"
              name="text"
              id="text"
              placeholder="I'm looking for..."
              cols="100"
              rows="7"
            ></textarea>
            <button className="flex shadow-md  items-center bg-gray-200   to-gray-700 px-2 py-2">
              <PaperClipIcon className="h-6 mr-3" />
              Attach Files
            </button>
          </div>
        </div>
      </div>
      <div className="w-[960px] shadow-md bg-white mx-auto px-8">
        <h1 className="text-lg font-bold pt-5 mb-3 text-gray-700">
          Choose a Category:
        </h1>
        <div className="">
        <div className=" pb-5">
            <form className="w-32" action="">
              <select className="w-96 border-2 p-2 rounded-lg outline-none" id="dropdown">
                <option className="font-bold">Select....</option>
                <option className="p-5  bg-gray-100" value="1">Graphic Desing</option>
                <option className="p-5  bg-gray-100" value="2">Digital Marketing</option>
                <option className="p-5  bg-gray-100" value="3">Writing & Translation</option>
                <option className="p-5  bg-gray-100" value="4">Vedio & Animation</option>
                <option className="p-5  bg-gray-100" value="5">Music & Vedio</option>
                <option className="p-5  bg-gray-100" value="6">Programming & Tech</option>
                <option className="p-5  bg-gray-100" value="7">Lifesyle</option>
                <option className="p-5  bg-gray-100" value="8">Data</option>
                <option className="p-5  bg-gray-100" value="9">Advaced</option>
               
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[960px] shadow-md bg-white mx-auto px-8 border-t pb-14 border-b mb-2 ">
          <h1 className="text-lg font-bold pt-5 mb-3 text-gray-700">Once You place you order,when woruld you like your service dellvered?</h1>
          <div className="flex items-center  pb-7">
              <div className="px-3 py-2 text-center font-bold  w-[200px] border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        24 Hours
              </div>
              <div className="px-3 py-2 text-center font-bold  w-[200px] border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform  shadow-md transition .5s ease-out">
                       3 Day
              </div>
              <div className="px-3 py-2 text-center font-bold  w-[200px] border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        7 Days
              </div>
              <div className="px-3 py-2 text-center font-bold  w-[200px] border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform transition shadow-md .5s ease-out">
                       Others
              </div>
              
          </div>
          <div className="px-2 absolute right-50 top-50 justify-self-end py-2 w-[200px] rounded-sm text-center bg-green-400 text-white font-bold shadow-md cursor-pointer">
              Submit Request
          </div>
      </div>
    </div>
  );
}

export default Service;
