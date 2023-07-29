// Importar la función `createSlice` desde Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Estado inicial del filtro
const initialState = {
  filter: "",
};

// Crear el slice de Redux para el manejo del estado del filtro
const filterSlice = createSlice({
  name: "filter", // Nombre del slice
  initialState, // Estado inicial del filtro
  reducers: {
    // Reducer para actualizar el estado del filtro
    updateFilter(state, { payload }) {
      state.filter = payload; // Actualizar el valor del filtro con el valor proporcionado en payload
    },
  },
});

// Exportar el reducer del slice de filtro
export const filterReducer = filterSlice.reducer;

// Exportar la acción `updateFilter` generada automáticamente por `createSlice`
export const { updateFilter } = filterSlice.actions;
