import {
  Activity,
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  History,
  Home,
  LineChart,
  MessageSquare,
  Plus,
  Search,
  Settings,
  User2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-white p-6 flex flex-col border-r">
        <div className="flex items-center mb-10">
          <h1 className="text-xl font-bold text-cyan-500">
            Health<span className="text-gray-800">care.</span>
          </h1>
        </div>

        <div className="space-y-6 flex-1">
          <div>
            <p className="text-xs text-gray-400 mb-4">General</p>
            <nav className="space-y-4">
              <Link href="#" className="flex items-center gap-3 text-indigo-600 font-medium">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Home size={18} />
                </div>
                <span>Dashboard</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <History size={18} />
                </div>
                <span>History</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Calendar size={18} />
                </div>
                <span>Calendar</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <User2 size={18} />
                </div>
                <span>Appointments</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <LineChart size={18} />
                </div>
                <span>Statistics</span>
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-4">Tools</p>
            <nav className="space-y-4">
              <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <span>Chat</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Activity size={18} />
                </div>
                <span>Support</span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-auto">
          <Link href="#" className="flex items-center gap-3 text-gray-500 hover:text-indigo-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <Settings size={18} />
            </div>
            <span>Setting</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-6 flex items-center justify-between border-b">
          <div className="flex items-center gap-4 w-1/3">
            <h1 className="text-2xl font-bold text-indigo-900">Dashboard</h1>
          </div>

          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4 justify-end w-1/3">
            <button className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-white">
              <User2 size={20} />
            </div>
            <button className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Plus size={20} />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 grid grid-cols-12 gap-6">
          {/* Date Selector */}
          <div className="col-span-12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-gray-500 text-sm">This Week</div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
            <div className="text-center">
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border flex items-center justify-center text-indigo-600">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded-full border flex items-center justify-center text-indigo-600">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* 3D Model Section */}
          <div className="col-span-12 md:col-span-5 bg-white rounded-xl p-6 relative">
            <div className="relative h-80 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?ga=GA1.1.630857417.1748083117&semt=ais_hybrid&w=740"
                alt="Human Anatomy Model"
                width={300}
                height={400}
                className="object-contain"
              />

              {/* Heart Label */}
              {/* <div className="absolute top-1/3 right-1/4 flex items-center">
                <div className="bg-indigo-600 text-white text-xs py-1 px-3 rounded-full flex items-center gap-1">
                  <Heart size={12} className="text-red-300" />
                  <span>Healthy Heart</span>
                </div>
                <div className="w-6 h-0.5 bg-indigo-600"></div>
              </div> */}

              {/* Leg Label */}
              {/* <div className="absolute bottom-1/4 left-1/4 flex items-center">
                <div className="bg-cyan-500 text-white text-xs py-1 px-3 rounded-full flex items-center gap-1">
                  <Activity size={12} />
                  <span>Healthy Leg</span>
                </div>
                <div className="w-6 h-0.5 bg-cyan-500"></div>
              </div> */}
            </div>
          </div>

          {/* Health Status Section */}
          <div className="col-span-12 md:col-span-3 bg-white rounded-xl p-6 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
         <path fill="#ff0040" d="M320 0c17.7 0 32 14.3 32 32l0 132.1c0 16.4 8.4 31.7 22.2 40.5l9.8 6.2 0-45.5C384 127 415 96 453.3 96c21.7 0 42.8 10.2 55.8 28.8c15.4 22.1 44.3 65.4 71 116.9c26.5 50.9 52.4 112.5 59.6 170.3c.2 1.3 .2 2.6 .2 4l0 7c0 49.1-39.8 89-89 89c-7.3 0-14.5-.9-21.6-2.7l-72.7-18.2C414 480.5 384 442.1 384 398l0-73 90.5 57.6c7.5 4.7 17.3 2.5 22.1-4.9s2.5-17.3-4.9-22.1L384 287.1l0-.4-44.1-28.1c-7.3-4.6-13.9-10.1-19.9-16.1c-5.9 6-12.6 11.5-19.9 16.1L256 286.7 161.2 347l-13.5 8.6c0 0 0 0-.1 0c-7.4 4.8-9.6 14.6-4.8 22.1c4.7 7.5 14.6 9.7 22.1 4.9l91.1-58 0 73.4c0 44.1-30 82.5-72.7 93.1l-72.7 18.2c-7.1 1.8-14.3 2.7-21.6 2.7c-49.1 0-89-39.8-89-89l0-7c0-1.3 .1-2.7 .2-4c7.2-57.9 33.1-119.4 59.6-170.3c26.8-51.5 55.6-94.8 71-116.9c13-18.6 34-28.8 55.8-28.8C225 96 256 127 256 165.3l0 45.5 9.8-6.2c13.8-8.8 22.2-24.1 22.2-40.5L288 32c0-17.7 14.3-32 32-32z"/></svg>
                </div>
                <h3 className="text-lg font-medium text-indigo-900">Lungs</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2">Date: 15 April 2025</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-400 to-red-500 w-3/4 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg  width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="#f2f2f2" d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"/></svg>
                </div>
                <h3 className="text-lg font-medium text-indigo-900">Teeth</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2">Date: 25 May 2025</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 w-1/2 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                 <svg width ="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                 <path fill="#fafafa" d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2l192 0c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336l-192 0c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"/></svg>
                </div>
                <h3 className="text-lg font-medium text-indigo-900">Bone</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2">Date: 1 Jan 2026</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 w-2/3 rounded-full"></div>
              </div>
            </div>

            <button className="text-indigo-600 text-sm flex items-center gap-1 mt-auto self-end">
              <span>Details</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Calendar Section */}
             
          <div className="col-span-12 md:col-span-4 bg-white rounded-xl p-6">
             <h2 className="text-lg font-semibold text-indigo-900">May 2025</h2>
            <div className="grid grid-cols-7 gap-2 text-center mb-4">

              
              <div className="text-sm font-medium text-indigo-900">Mon</div>
              <div className="text-sm font-medium text-indigo-900">Tues</div>
              <div className="text-sm font-medium text-indigo-900">Wed</div>
              <div className="text-sm font-medium text-indigo-900">Thurs</div>
              <div className="text-sm font-medium text-indigo-900">Fri</div>
              <div className="text-sm font-medium text-indigo-900">Sat</div>
              <div className="text-sm font-medium text-indigo-900">Sun</div>

              <div className="text-lg font-semibold text-indigo-900">25</div>
              <div className="text-lg font-semibold text-indigo-900">26</div>
              <div className="text-lg font-semibold text-indigo-900">27</div>
              <div className="text-lg font-semibold text-indigo-900">28</div>
              <div className="text-lg font-semibold text-indigo-900">29</div>
              <div className="text-lg font-semibold text-indigo-900">30</div>
              <div className="text-lg font-semibold text-gray-400">31</div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500">
              <div>10:00</div>
              <div>08:00</div>
              <div>12:00</div>
              <div className="bg-indigo-100 rounded-md py-1 text-indigo-600">10:00</div>
              <div>—</div>
              <div className="bg-indigo-100 rounded-md py-1 text-indigo-600">12:00</div>
              <div>09:00</div>

              <div>11:00</div>
              <div className="bg-indigo-600 rounded-md py-1 text-white">09:00</div>
              <div>—</div>
              <div>11:00</div>
              <div>14:00</div>
              <div>14:00</div>
              <div>10:00</div>

              <div>12:00</div>
              <div>10:00</div>
              <div>13:00</div>
              <div>—</div>
              <div>16:00</div>
              <div>15:00</div>
              <div>11:00</div>
            </div>

            {/* Appointment Cards */}
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg  width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="#f2f2f2" d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"/></svg>
                </div>
                    <span className="font-medium">Dentist</span>
                  </div>
                  <div className="text-sm">09:00-11:00</div>
                  <div className="text-sm">Dr. Lakshya</div>
                </div>
                <div className="bg-indigo-100 rounded-xl p-4 text-indigo-900">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                   <path fill="#ffffff" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"/></svg>
                      </div>
                    <span className="font-medium">Physiotherapy Appointment</span>
                  </div>
                  <div className="text-sm">10:00-12:00</div>
                  <div className="text-sm">Dr. Lakshya</div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-indigo-900 mt-6">The Upcoming Schedule</h3>

              <div>
                <p className="text-sm text-gray-500 mb-2">On Monday</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-indigo-900">Health checkup complete</span>
                      <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#e41b39" d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57 0-88.8c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"/></svg>
                    </div>
                    <div className="text-sm text-indigo-900">12:00 AM</div>
                  </div>
                  <div className="bg-indigo-100 rounded-xl p-4">
                     <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                     
                    
                    <div className="flex items-center justify-between mb-1">
                      
                      <span className="font-medium text-indigo-900">Ophthalmologist</span>
                      
                    
                    </div>
                    <div className="text-sm text-indigo-900">10:00 PM</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">On Tuesday</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-indigo-900">Cardiologist</span>
                      <Heart size={16} className="text-red-500" />
                    </div>
                    <div className="text-sm text-indigo-900">12:00 AM</div>
                  </div>
                  <div className="bg-indigo-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-indigo-900">Neurologist</span>
                     <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="#d59058" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                    </div>
                    <div className="text-sm text-indigo-900">13:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="col-span-12 bg-white rounded-xl p-6">
            
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">Activity</h3>
               <div className="text-xs text-gray-400 mt-2">5 appointment on this week</div>
            <div className="h-40 flex items-end justify-between gap-2">
              {/* Monday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-1/2 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-1/4 w-3 bg-gray-200 rounded-full"></div>
                <div className="h-3/4 w-3 bg-indigo-600 rounded-full"></div>
              </div>

              {/* Tuesday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-1/3 w-3 bg-gray-200 rounded-full"></div>
                <div className="h-2/3 w-3 bg-indigo-600 rounded-full"></div>
                <div className="h-1/5 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-1/5 w-3 bg-cyan-500 rounded-full"></div>
              </div>

              {/* Wednesday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-1/4 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-1/2 w-3 bg-indigo-600 rounded-full"></div>
                <div className="h-1/3 w-3 bg-gray-200 rounded-full"></div>
              </div>

              {/* Thursday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-3/5 w-3 bg-gray-200 rounded-full"></div>
                <div className="h-2/5 w-3 bg-indigo-600 rounded-full"></div>
                <div className="h-4/5 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-4/5 w-3 bg-cyan-500 rounded-full"></div>
              </div>

              {/* Friday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-1/2 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-3/4 w-3 bg-gray-200 rounded-full"></div>
                <div className="h-1/4 w-3 bg-indigo-600 rounded-full"></div>
              </div>

              {/* Saturday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-2/3 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-1/3 w-3 bg-gray-200 rounded-full"></div>
                <div className="h-1/2 w-3 bg-indigo-600 rounded-full"></div>
              </div>

              {/* Sunday */}
              <div className="flex items-end gap-1 h-full">
                <div className="h-1/4 w-3 bg-gray-200 rounded-full"></div>
                <div className="h-3/4 w-3 bg-indigo-600 rounded-full"></div>
                <div className="h-1/3 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-1/3 w-3 bg-cyan-500 rounded-full"></div>
                <div className="h-1/3 w-3 bg-cyan-500 rounded-full"></div>
                
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <div>Mon</div>
              <div>Tues</div>
              <div>Wed</div>
              <div>Thurs</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}
