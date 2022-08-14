import React from 'react';

export const favoritesContext = React.createContext({
    listFaves: [],
    updateListFaves: (id) => null
});
export const likefavoritesContext = React.createContext({
    like:false,
    updatelike: (id) => null
});
