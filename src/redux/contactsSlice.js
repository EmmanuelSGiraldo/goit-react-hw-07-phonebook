// Importar la función `createSlice` desde Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Importar las acciones asincrónicas para obtener, agregar y eliminar contactos
import { fetchContacts, addContact, deleteContact } from "./operations";

// Función para manejar la acción "pending" (en curso) de las operaciones asíncronas
const handlePending = (state) => {
  state.isLoading = true; // Establecer isLoading en true para mostrar que la solicitud está en curso
};

// Función para manejar la acción "rejected" (rechazada) de las operaciones asíncronas
const handleRejected = (state, action) => {
  state.isLoading = false; // Establecer isLoading en false para indicar que la solicitud terminó
  state.error = action.payload; // Guardar el mensaje de error en el estado para mostrarlo al usuario
};

// Crear el slice de Redux para el manejo del estado de los contactos
const contactsSlice = createSlice({
  name: "contacts", // Nombre del slice
  initialState: {
    items: [], // Lista de contactos
    isLoading: false, // Bandera para indicar si hay una operación en curso
    error: null, // Almacenar el mensaje de error en caso de que una solicitud falle
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        // Manejar el caso cuando la solicitud de obtener contactos es exitosa
        state.isLoading = false; // Establecer isLoading en false ya que la solicitud ha terminado
        state.error = null; // Limpiar el mensaje de error en caso de que haya alguno
        state.items = payload; // Actualizar la lista de contactos con los datos obtenidos
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        // Manejar el caso cuando la solicitud de agregar un contacto es exitosa
        state.isLoading = false; // Establecer isLoading en false ya que la solicitud ha terminado
        state.error = null; // Limpiar el mensaje de error en caso de que haya alguno
        state.items.push(payload); // Agregar el nuevo contacto a la lista de contactos existentes
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        // Manejar el caso cuando la solicitud de eliminar un contacto es exitosa
        state.isLoading = false; // Establecer isLoading en false ya que la solicitud ha terminado
        state.error = null; // Limpiar el mensaje de error en caso de que haya alguno
        const index = state.items.findIndex(
          (contact) => contact.id === payload.id
        );
        state.items.splice(index, 1); // Eliminar el contacto de la lista de contactos
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      // Utilizar handlePending para todas las acciones que terminan con "/pending"
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
      // Utilizar handleRejected para todas las acciones que terminan con "/rejected"
  },
});

// Exportar el reducer del slice de contactos
export const contactReducer = contactsSlice.reducer;
