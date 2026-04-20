import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface.ts';
import { Suspense } from 'react';

export function Product() {
	const data:{data: Product} = useLoaderData();

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await resolve={data.data}>
				{({data}: {data: Product}) => (<>Product - {data.name}</>)}
			</Await>
		</Suspense>
	</>;
}