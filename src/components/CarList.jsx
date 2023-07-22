import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCars, deleteVehicle } from '../redux/slices/carSlice';

const CarList = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCars());
  }, [dispatch]);

  const handleDelete = (vehicleId) => {
    dispatch(deleteVehicle(vehicleId));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">List of Cars</h2>
      {cars.map((car) => (
        <div key={car.user_id} className="border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <p className="text-gray-700">{car.description}</p>
          <button
            type="button"
            onClick={() => handleDelete(car.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
