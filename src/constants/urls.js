 const urls = {
    Chocolates: "https://api.mercadolibre.com/sites/MLA/search?q=chocolates%20fenix",
    Moldes: "https://api.mercadolibre.com/sites/MLA/search?q=moldes%20nordicware",
    Espatulas: "https://api.mercadolibre.com/sites/MLA/search?q=espatulas%20reposteria",
    Aromatizantes: "https://api.mercadolibre.com/sites/MLA/search?q=esencias%20reposteria",
  };

  const getCategoryQuery = (categoriaBuscada) => 
    Object.entries(urls)
      .filter(([categoria]) => !categoriaBuscada || categoria === categoriaBuscada) 
      .map(([categoria, url]) => ({ categoria, url })); 
  

  const getCategories = Object.keys(urls);

  const getProductQuery = (productoBuscado) => `https://api.mercadolibre.com/items/${productoBuscado}`;

  const getProductDescription = (productoBuscado) => `https://api.mercadolibre.com/items/${productoBuscado}/description`;

  export { getCategoryQuery, getCategories, getProductQuery, getProductDescription};
