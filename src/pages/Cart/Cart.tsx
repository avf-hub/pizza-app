import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import type { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import type { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

const DELIVERY_FEE = 169;

export function Cart() {
	const [cardProducts, setCardProducts] = useState<Product[]>([]);
	const items = useSelector((state: RootState) => state.cart.items);

	const total = items.map(i => {
		const product = cardProducts.find(prod => prod.id === i.id);
		if (!product) {
			return 0;
		}
		return i.count * product.price;
	}).reduce((acc, i) => acc += i, 0);

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
		<Headling className={styles.headling}>Корзина</Headling>
		{items.map(i => {
			const product = cardProducts.find(prod => prod.id === i.id);
			if (!product) {
				return;
			}
			return <CartItem key={product.id} count={i.count} {...product} />;
		})}
		<div className={styles.line}>
			<div className={styles.text}>Итог</div>
			<div className={styles.price}>{total}&nbsp;<span>₽</span></div>
		</div>
		<hr className={styles.hr}/>
		<div className={styles.line}>
			<div className={styles.text}>Доставка</div>
			<div className={styles.price}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
		</div>
		<hr className={styles.hr}/>
		<div className={styles.line}>
			<div className={styles.text}>Итог {items.length}</div>
			<div className={styles.price}>{total * DELIVERY_FEE}&nbsp;<span>₽</span></div>
		</div>
	</>;
}