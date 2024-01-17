

// PRODUCTS
export { ProductsTable } from './components/products/ProductsTable';
export { ProductReportCard } from './components/products/ProductReportCard';
export { NewProductForm } from './components/products/NewProductForm';


// INTERFACES
export type { CategoriesResponse } from './interfaces/categories/categories-response';
export type * from './interfaces/categories/category';
export type  * from './interfaces/products/products-response';
export type { ISimpleProduct } from './interfaces/products/simple-product';
export type * from './interfaces/products/products-response';
export type * from './interfaces/products/product-types-response';
export type * from './interfaces/products/create-product-response';


// ACTIONS
export { getCategories } from "./actions/categories/get-categories";
export { createCategory } from "./actions/categories/create-category";
export { getAllProducts } from './actions/products/get-all-products';
export { getAllProductTypes } from './actions/products/get-product-types';
export { createProduct } from './actions/products/create-product';

// CATEGORIES
export { NewCategoryModal } from './components/categories/NewCategoryModal';
export { CategoryList } from "./components/categories/CategoryList";




export { NavBar } from "./components/NavBar";

