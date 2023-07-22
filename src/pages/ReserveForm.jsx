import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';
import ReservationPage from '../components/ReserveVehicleForm';
import { fetchReservations } from '../redux/slices/carSlice';

const ReserveForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations);
  }, []);
  return (
    <div className="drawer lg:drawer-open">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <MenuIcon />
        {/* Page content here */}
        {/* <ReservationForm /> */}
        <h1 className="text-4xl">RESERVE FORM</h1>
        <ReservationPage />
      </div>
      <SideBar />
    </div>
  );
};

export default ReserveForm;
