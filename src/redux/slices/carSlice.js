import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BASE_URL = 'http://localhost:3001/api/v1';

export const fetchCars = createAsyncThunk(
  'cars/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars`);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

export const postVehicle = createAsyncThunk(
  'carSlice/postVehicle', // The action type string for pending/fulfilled/rejected actions
  async (vehicleData) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const initialState = {
  cars: [],
  car: {},
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,

  // Extrareducers
  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;

      // Extracted the objects of cars to single car and assign it to car in the state
      state.car = state.cars.reduce((acc, car) => ({
        ...acc,
        [car.user_id]: {
          name: car.name,
          description: car.description,
          photo: car.photo,
          price: car.price,
          user: car.user,
          dateAdded: car.date_added,
        },
      }), {});
    },
  },
});

export default carSlice.reducer;
