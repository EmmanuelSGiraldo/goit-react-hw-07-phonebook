// Importar la función `createSelector` desde Redux Toolkit
import { createSelector } from "@reduxjs/toolkit";

// Selector para obtener la lista de contactos del estado
export const selectContacts = (state) => state.contacts.items;

// Selector para obtener el valor del filtro del estado
export const selectFilter = (state) => state.filter.filter;

// Selector para obtener el estado de carga (isLoading) del estado de contactos
export const selectIsLoading = (state) => state.contacts.isLoading;

// Selector para obtener el error (si hay alguno) del estado de contactos
export const selectError = (state) => state.contacts.error;

// Selector avanzado para obtener los contactos visibles después de aplicar el filtro
export const selectVisibleContacts = createSelector(
  // Array de los selectores previos: selectFilter y selectContacts
  [selectFilter, selectContacts],
  // Función de transformación que se ejecuta con los resultados de los selectores previos
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase(); // Normalizar el filtro a minúsculas
    return contacts
      .filter((contact) => contact.name.toLowerCase().includes(normalizedFilter)) // Filtrar los contactos que coinciden con el filtro
      .sort((a, b) => a.name.localeCompare(b.name)); // Ordenar los contactos alfabéticamente por nombre
  }
);
