import { Product } from "./JSONTypes";

//const SERVER_URL = 'http://127.0.0.1:8000/'
const SERVER_URL = '/'

export function getProducts(brand: string) {
  return sendGetRequest<Product[]>(`api/products/${brand}/`)
}

async function sendGetRequest<T>(url: string): Promise<T> {
  const response = await fetch(SERVER_URL + url);
  const data = await response.json();
  return data;
}