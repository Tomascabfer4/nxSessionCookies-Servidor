'use server'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";
import path from 'path';
import { promises as fs } from 'fs';

export async function login(formData) {
  const LOGIN_URL = '/'
  const email = formData.get('email')
  const password = formData.get('password') 
  const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

  const filePath = path.join(process.cwd(), 'src', 'lib', 'users.json');
  
  let users = [];
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    users = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error: No se pudo leer el archivo users.json", error);
    return;
  }

  const usuarioEncontrado = users.find(u => u.email === email && u.password === password);

  if (!usuarioEncontrado) {
    console.log("Login fallido: Credenciales incorrectas");
    return;
  }

  await setCookie('session', { 
    name: usuarioEncontrado.name, 
    email: usuarioEncontrado.email 
  })

  redirect(callbackUrl);
}

export async function logout() {
  await deleteCookie('session')

  redirect('/?' + Math.random())
}