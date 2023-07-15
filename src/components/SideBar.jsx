import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { logoutUser } from '../redux/slices/userSlice';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutUser());
      window.location.reload();
    }, 1000);
    toast.success('Logout Successful!');
  };

  return (
    <div className="drawer-side shadow ">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label htmlFor="my-drawer-2" className="drawer-overlay" />
      <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content flex flex-col justify-between">
        <div>
          <div className="mb-28">
            <h1 className="text-3xl italic">BOOK VEHICLE</h1>
          </div>
          {/* Sidebar content here */}
          <li className="shadow  shadow-x">
            <Link to="/" className="hover:bg-green-500 text-xl rounded-none hover:text-white">VEHICLES</Link>
          </li>
          <li className="shadow">
            <Link to="/reseve-form" className="hover:bg-green-500 text-xl rounded-none hover:text-white">RESERVE FORM</Link>
          </li>
          <li className="shadow">
            <Link to="/reservations" className="hover:bg-green-500 text-xl rounded-none hover:text-white">RESERVATIONS</Link>
          </li>
          <li className="shadow">
            <Link to="/add-vehicle" className="hover:bg-green-500 text-xl rounded-none hover:text-white">ADD VEHICLE</Link>
          </li>
          <li className="shadow">
            <Link to="/remove-vehicle" className="hover:bg-green-500 text-xl rounded-none hover:text-white">REMOVE VEHICLE</Link>
          </li>
          <Link to="/register">
            <button
              type="button"
              onClick={handleLogout}
              className="logout-btn btn"
            >
              Logout
            </button>
          </Link>
        </div>
        <div className="grid  gap-4 ">
          <span className="flex gap-4">
            <BsTwitter className="text-xl" />
            <FaFacebookF className="text-xl" />
            <FcGoogle className="text-xl" />
            <TfiMicrosoftAlt className="text-xl" />
            <BsWhatsapp className="text-xl" />
          </span>
          <span className="text-sm font-bold">
            &copy;
            {' '}
            <small>Vehicle Booking</small>
          </span>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
