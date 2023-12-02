# PRUEBA TÉCNICA

# Configuración del entorno:
Configura un proyecto de Vue.js con Vite. Puedes hacerlo usando la plantilla oficial de Vite para
Vue: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

# Creación de componentes: 

Crea los componentes necesarios para implementar la aplicación,
como ProductList, SearchBar, CategoryList, ShoppingCart, etc.
# Consumo de la API: 

Utiliza la API proporcionada en https://fakestoreapi.com/ para obtener el
listado de productos y sus categorías. Puedes utilizar la librería axios o el método fetch de
JavaScript para realizar las llamadas a la API.
 Mostrar productos: 
Muestra la lista de productos con sus respectivas fotos en la página
principal. Puedes utilizar PrimeVue's DataTable para mostrar los productos.
Búsqueda de productos:
Implementa un componente de barra de búsqueda que permita al usuario buscar productos por
nombre. Actualiza la lista de productos en tiempo real a medida que el usuario escribe en el
campo de búsqueda.

# Listado de categorías: 

Muestra un listado de categorías en la página principal, obtenido de la
API. Los usuarios pueden hacer clic en una categoría para filtrar los productos por esa
categoría.
Productos por categoría:
Implementa una funcionalidad que permita a los usuarios filtrar los productos por categoría.
Cuando se hace clic en una categoría en el listado de categorías, se deben mostrar solo los
productos de esa categoría.

# Carrito de compra: 

Implementa un carrito de compra que permita a los usuarios agregar y
eliminar productos. Debe mostrar la lista de productos en el carrito, la cantidad y el precio total.
Almacenamiento de datos:
Para almacenar los productos en el carrito de compra y gestionar el estado de la aplicación,
puedes utilizar Vuex o el sistema de estados locales de Vue.js.

# Estilos y diseño: 

Utiliza PrimeVue para aplicar estilos y darle una apariencia agradable a la
aplicación.