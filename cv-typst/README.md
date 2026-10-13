# CV en Typst

Fuente editable de los CV de Jhossua Vega, en [Typst](https://typst.app). Reemplaza la versión anterior (generada con HTML + Playwright) manteniendo el mismo diseño visual (header teal, foto circular, layout de dos columnas).

## Archivos

- `cv_template.typ` — plantilla compartida (colores, tipografía, componentes: tags de habilidades, barras de idioma, items de experiencia/educación/certificaciones).
- `cv_es.typ` — contenido en español. Llama a la plantilla con los textos en español.
- `cv_en.typ` — contenido en inglés.
- `photo.jpg` — foto de perfil usada en el header.

## Cómo recompilar a PDF

Con el compilador de Typst instalado (`pip install typst` o el binario desde [typst.app](https://typst.app)):

```bash
typst compile cv_es.typ Jhossua_Vega_CV.pdf
typst compile cv_en.typ Jhossua_Vega_CV_EN.pdf
```

Copia los PDF resultantes a `../assets/cv/` con esos mismos nombres — son los que enlaza el portafolio (el botón de descarga cambia automáticamente entre el CV en español y en inglés según el idioma activo del sitio).

## Editar contenido

Para actualizar experiencia, habilidades, certificaciones, etc., edita los arrays al final de `cv_es.typ` / `cv_en.typ` (mantén ambos archivos sincronizados en contenido, solo cambia el idioma). La plantilla ajusta el layout automáticamente; si el contenido no entra en una página, reduce ligeramente los tamaños de fuente o los márgenes en `cv_template.typ`.
