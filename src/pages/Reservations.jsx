import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, fetchReservations } from '../redux/slices/carSlice';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reservations } = useSelector((state) => state.cars);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleCancelReservation = (resevationId) => {
    dispatch(cancelReservation(resevationId));
    navigate('/reservation', { replace: true });
  };

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
                    {user.username}
                  </p>
                  <p>
                    Vehicle:
                    {user.username}
                  </p>
                  <p>
                    City:
                    {reservation.city}
                  </p>
                  <p>
                    Date:
                    {reservation.reservation_date}
                  </p>
                  <p>
                    City:
                    {reservation.returned_date}
                  </p>
                  <button onClick={() => handleCancelReservation(reservation.id)} type="submit" className="btn btn-success">
                    Cancel Reservation
                  </button>
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
