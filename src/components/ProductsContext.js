import React from 'react';

const ProductsContext = React.createContext();
const ProductsProvider = ProductsContext.Provider;
const ProductsConsumer = ProductsContext.Consumer;

export {ProductsProvider, ProductsConsumer};