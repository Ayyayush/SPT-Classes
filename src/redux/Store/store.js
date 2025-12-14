import { configureStore } from '@reduxjs/toolkit';
import RegistrationReducer from '../Slices/registerFormSlice.js'

const store = configureStore({
    reducer: {
        RegistrationReducer: RegistrationReducer, // add more slices here as needed
    },
});


export default store;