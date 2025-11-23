interface Translatable {
  [key: string]: string
  en: string
  ro: string
}

export interface Category {
  id: string
  name: Translatable
}

export interface Product {
  id: string
  category: Category
  brand: string
  name: Translatable
  image: string
}