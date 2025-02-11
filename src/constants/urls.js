 const urls = {
    Chocolates: "https://api.mercadolibre.com/sites/MLA/search?q=chocolates%20fenix",
    Moldes: "https://api.mercadolibre.com/sites/MLA/search?q=moldes%20nordicware",
    Espatulas: "https://api.mercadolibre.com/sites/MLA/search?q=espatulas%20reposteria",
    Aromatizantes: "https://api.mercadolibre.com/sites/MLA/search?q=esencias%20reposteria",
  };

  const getQuery = (categoriaBuscada) => 
    Object.entries(urls)
      .filter(([categoria]) => !categoriaBuscada || categoria === categoriaBuscada) // Filtra si hay categoría
      .map(([categoria, url]) => ({ categoria, url })); // Convierte en array de objetos
  

  const getCategories = Object.keys(urls);

  export { getQuery, getCategories};
