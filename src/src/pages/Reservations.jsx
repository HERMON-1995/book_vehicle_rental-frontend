import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/slices/carSlice';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.cars);

  useEffect(() => {
    // Fetch the reservations data on component mount
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="drawer lg:drawer-open">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <MenuIcon />
        <h1 className="text-4xl">RESERVATIONS</h1>
        <div>
          {reservations.length === 0 ? (
            <p>No reservations found.</p>
          ) : (
            <ul>
              {reservations.map((reservation) => (
                <li key={reservation.id}>
                  {/* Display reservation details here */}
                  <p>
                    Username:
                    {reservation.username}
                  </p>
                  <p>
                    Vehicle:
                    {reservation.selectedItem}
                  </p>
                  <p>
                    Date:
                    {reservation.date}
                  </p>
                  <p>
                    City:
                    {reservation.city}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Reservations;
