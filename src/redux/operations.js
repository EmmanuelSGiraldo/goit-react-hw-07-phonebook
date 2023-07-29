// Importar la función `createAsyncThunk` desde Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";

// Importar la librería `axios` para realizar peticiones HTTP
import axios from "axios";

// Configurar la URL base para las solicitudes con `axios`
axios.defaults.baseURL = "https://64c2bfb1eb7fd5d6ebd04be8.mockapi.io";

// Acción asincrónica para obtener la lista de contactos
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", // Nombre de la acción: "sliceName/actionName"
  async (_, thunkAPI) => {
    try {
      // Realizar una solicitud GET para obtener los contactos
      const response = await axios.get("/contacts");
      // Devolver los datos obtenidos en la respuesta como resultado de la acción
      return response.data;
    } catch (e) {
      // Si ocurre un error en la solicitud, rechazar la acción con el mensaje de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Acción asincrónica para agregar un nuevo contacto
export const addContact = createAsyncThunk(
  "contacts/addContact", // Nombre de la acción: "sliceName/actionName"
  async ({ name, number }, thunkAPI) => {
    try {
      // Realizar una solicitud POST para agregar el nuevo contacto
      const response = await axios.post("/contacts", { name, number });
      // Devolver los datos obtenidos en la respuesta como resultado de la acción
      return response.data;
    } catch (e) {
      // Si ocurre un error en la solicitud, rechazar la acción con el mensaje de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Acción asincrónica para eliminar un contacto existente
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", // Nombre de la acción: "sliceName/actionName"
  async (contactId, thunkAPI) => {
    try {
      // Realizar una solicitud DELETE para eliminar el contacto con el ID especificado
      const response = await axios.delete(`/contacts/${contactId}`);
      // Devolver los datos obtenidos en la respuesta como resultado de la acción
      return response.data;
    } catch (e) {
      // Si ocurre un error en la solicitud, rechazar la acción con el mensaje de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
