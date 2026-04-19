import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import type { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import MenuList from './MenuList/MenuList';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			
			setIsLoading(false);
		}
		catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	// 	try {
	// 		const res = await fetch(`${PREFIX}/products`);
	// 		if (!res.ok) {
	// 			return;
	// 		}
	// 		const data:Product[] = await res.json();
	// 		setProducts(data);
	// 	}
	// 	catch (e) {
	// 		console.error(e);
	// 		return;
	// 	}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return <>
		<div className={styles.head}>
			<Headling>Меню</Headling>
			<Search placeholder='Введите блюдо или состав'/>
		</div>
		<div>
			{error && <>{error}</>}
			{!isLoading && <MenuList products={products} />}
			{isLoading && <>Загружаем продукты...</>}
		</div>
	</>;
}

export default Menu;