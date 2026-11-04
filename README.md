# Playground

Una colección de minijuegos estáticos publicada con GitHub Pages.

Para probarlo, puedes usar el siguiente enlace:

[**Acceder a *Playground***](https://mariosultan.github.io/Playground)

## Añadir un juego

1. Crea una carpeta dentro de `games/`. El nombre de la carpeta será su dirección web, por ejemplo `games/mi-juego/`.
2. Dentro, añade un `index.html` y los archivos CSS/JavaScript que necesite.
3. Añade un `game.json` con los datos que aparecerán en la tarjeta de inicio:

```json
{
  "name": "Mi juego",
  "description": "Una descripción breve del juego.",
  "icon": "🧩"
}
```

4. Haz `push` a la rama `main`. GitHub Actions detectará la carpeta y generará el catálogo automáticamente.

No hace falta modificar `index.html`, `app.js` ni `games.json` para añadir juegos. `games.json` se genera automáticamente durante la publicación; no lo edites a mano.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta a la raíz del repositorio.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Comprueba que la rama principal se llama `main` y haz un `push`.
5. En la pestaña **Actions**, espera a que termine el flujo `Deploy Playground to GitHub Pages`.

La web quedará publicada en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Probar en local

Desde esta carpeta ejecuta:

```bash
python scripts/generate_catalog.py
python -m http.server 8000
```

Abre `http://localhost:8000` en el navegador. Es importante usar un servidor local (y no abrir `index.html` directamente), porque el catálogo se carga mediante `fetch`.
