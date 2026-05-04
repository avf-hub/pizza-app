import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import type { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import type { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import CartItem from '../../components/CartItem/CartItem';

export function Cart() {
	const [cardProducts, setCardProducts] = useState<Product[]>([]);
	const items = useSelector((state: RootState) => state.cart.items);

	useEffect(() => {
		loadAllItems();
	}, [items]);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const result = await Promise.all(items.map(i => getItem(i.id)));
		setCardProducts(result);
	};

	return <>
		<Headling>Корзина</Headling>
		{items.map(i => {
			const product = cardProducts.find(prod => prod.id === i.id);
			if (!product) {
				return;
			}
			return <CartItem count={i.count} {...product} />;
		})}
	</>;
}