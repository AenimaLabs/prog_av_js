export const loadAnimalData = async () => {
    try {
      const response = await fetch('animales.json');
      const data = await response.json();
      return data.animales;
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
      return [];
    }
  };
  