Características que hacen que sea una API REST:

Uso de HTTP y sus métodos estándar:

GET para obtener datos.

POST para crear nuevos recursos.

Recursos identificados por URLs.

/api/productos para listar productos (GET).

/api/productos para agregar un nuevo producto (POST).

Uso de representaciones: Los recursos son representados en JSON, formato estándar para intercambiar datos entre cliente y servidor en REST.

Sin estado (stateless): Cada solicitud de cliente debe contener toda la información necesaria para que el servidor pueda procesarla. El servidor no guarda estado entre solicitudes, lo que significa que no hay información del cliente guardada en el servidor entre las peticiones (por ejemplo, sesiones o cookies no son necesarias).

Interfaz uniforme: La interfaz de comunicación es uniforme: todos los clientes interactúan con la API a través de las mismas rutas y con los mismos métodos HTTP, usando los mismos principios y convenciones. 





Diferencias entre esta API REST y la Arquitectura de 3 Capas:
La arquitectura de 3 capas para organizar una aplicación. Las tres capas suelen ser:

Capa de presentación: Esta capa es para las interacciones del usuario, la interfaz y el flujo de entrada/salida.

Capa de lógica de negocio: Aquí se procesan las reglas de negocio, la lógica del sistema y los cálculos.

Capa de datos: Se encarga de interactuar con la base de datos, gestionando la persistencia.

En cuanto a una API, hay una relación con este patrón de tres capas, pero son diferentes en su enfoque.

1. Capa de presentación:
Arquitectura de 3 capas: Es la capa de la interfaz de usuario, que se comunica directamente con el usuario.

API REST: En REST no existe una "capa de presentación" de forma directa. Los consumidores de la API (como el front-end) son los encargados de mostrar los datos. En este caso, la "presentación" se hace desde el cliente (frontend), no desde la API.

2. Capa de lógica de negocio:
Arquitectura de 3 capas: La lógica de negocio está gestionada dentro de esta capa. Si tienes algo como cálculos, validaciones o reglas específicas.

API REST: La lógica de negocio en la API se encuentra dentro de los controladores. Aquí es donde validas las entradas (por ejemplo, verificar que el precio es un número).

3. Capa de datos:
Arquitectura de 3 capas: La base de datos se gestiona en esta capa. Aquí se interactúa con la base de datos directamente.

API REST: En una API REST, la capa de datos sigue existiendo, pero está encapsulada en el servicio o en un módulo que interactúa con la base de datos o almacenamiento . 