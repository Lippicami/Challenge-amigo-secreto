# Challenge-amigo-secreto

# 🎁 Amigo Secreto - Aplicación Web

Este proyecto es una pequeña aplicación web en **JavaScript**, **HTML** y **CSS** que permite:

- **Agregar** nombres de amigos a una lista.
- **Evitar duplicados** mediante validación.
- **Mostrar** la lista actualizada en pantalla.
- **Sortear** aleatoriamente un amigo de la lista.
- **Eliminar automáticamente** de la lista al amigo sorteado para que no se repita.

---

## 📂 Estructura del Proyecto

El proyecto consta de tres partes principales:

- **index.html** → Estructura base de la interfaz.
- **style.css** → Estilos visuales de la aplicación.
- **script.js** → Lógica en JavaScript para manejar datos y eventos.

---

## 🚀 Funcionalidades

### 1. Agregar Amigos
**Función:** `agregarAmigo()`
- Obtiene el valor del campo de texto con `document.getElementById("amigo").value`.
- Valida que el campo **no esté vacío**.  
- Verifica que el nombre **no esté repetido** en `listaNombres` usando `indexOf()`.
- Si pasa las validaciones, agrega el nombre al array `listaNombres`.
- Limpia el campo de entrada (`limpiarCaja()`).
- Actualiza la lista en pantalla (`mostrarLista()`).

---

### 2. Limpiar la Caja de Texto
**Función:** `limpiarCaja()`
- Asigna una cadena vacía al campo de texto `#amigo`.
- Garantiza que el campo esté listo para la siguiente entrada.

---

### 3. Mostrar Lista de Amigos
**Función:** `mostrarLista()`
- Selecciona el elemento HTML `#listaAmigos`.
- Limpia su contenido previo con `innerHTML = ""`.
- Recorre el array `listaNombres` con un bucle `for` y genera elementos `<li>` dinámicamente.
- Actualiza la interfaz mostrando todos los nombres actuales.

---

### 4. Sortear un Amigo
**Función:** `sortearAmigo()`
- Comprueba que existan nombres en `listaNombres`.
- Genera un índice aleatorio con:  
  ```js
  Math.floor(Math.random() * listaNombres.length)