# Uso de cookies y gestión de sesión
**Aplicación de ejemplo de uso de cookies y gestión de sesión**

> [!NOTE]
>
> Aplicación actualizada a Next.js 16. 
>
> En lugar del anterior archivo `middleware.js`, ahora tenemos **`proxy.js`**


Para ejecutar la aplicación en local seguir los siguientes pasos:

```
git  clone  https://github.com/Tomascabfer4/nxSessionCookies-Servidor
cd  nxSessionCookies-Servidor
npm  install
npm  run  dev
```

Para iniciar sesión puedes usar las siguientes credenciales:

|            |         usuario1         |          usuario2           |
| ---------- | -------------------------| --------------------------- |
| Nombre     | **John Doe**             | **Jane Smith**              |
| Email      | **john.doe@example.com** | **jane.smith@example.com**  |
| Contraseña | **hashed_password_1**    | **hashed_password_2**       |

## Se han hecho los siguientes cambios:

1. Se ha sustituido key por contraseña
2. Se ha creado el archivo users.json
3. Se comprueba que el usuario esta en dicho archivo para permitir hacer login.
4. La cookie se borra al pasar 10 segundos y al hacer logout
5. Solo podran acceder a Dashboard/Acerca de... a los usuarios logueados.

## Ejemplo de uso de cookies

```js
// A partir de NextJS 15, el acceso a cookies es asíncrono

import { cookies } from 'next/headers'
 
export default async function Page() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  return '...'
}
```