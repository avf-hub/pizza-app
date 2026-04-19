import { useLoaderData } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface.ts';

export function Product() {
	const data:Product = useLoaderData();

	return <>Product - {data.name}</>;
}