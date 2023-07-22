import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { reserveVehicle } from '../redux/slices/carSlice';

const ReservationPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user) || {};
  const [reservationDate, setReservationDate] = useState('');
  const [returnedDate, setReturnedDate] = useState('');
  const [city, setCity] = useState('');
  // const car = useSelector((state) => state.cars.cars[0]) || {};
  console.log(params);
  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationData = {
      user_id: user.id,
      car_id: params.car_id,
      reservation_date: reservationDate,
      returned_date: returnedDate,
      city,
    };
    dispatch(reserveVehicle(reservationData))
      .then(() => {
        // Redirect to the Reservations page after successful reservation
        navigate('/reservations');
      })
      .catch((error) => {
        console.log('Reservation failed:', error);
      });
  };

  return (
    <div>
      <div className="reservation-page">
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-control">
            <label htmlFor="date">Vehicle Name</label>
            <input
              type="text"
              id="name"
              placeholder={user.username}
              readOnly
              required
              disabled
            />
          </div>
          <div className="form-control">
            <label htmlFor="date">Vehicle Name</label>
            <input
              type="text"
              id="name"
              placeholder={params.name}
              readOnly
              required
              disabled
            />
          </div>
          <div className="form-control">
            <label htmlFor="reservationDate">Date:</label>
            <input
              type="date"
              id="reservationDate"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="returnedDate">Returned Date</label>
            <input
              type="date"
              id="returnedDate"
              value={returnedDate}
              onChange={(e) => setReturnedDate(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <button type="submit">Book</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
