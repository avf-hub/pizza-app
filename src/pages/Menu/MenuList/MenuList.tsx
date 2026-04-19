import ProductCard from '../../../components/ProductCard/ProductCard';
import type { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

function MenuList({products}: MenuListProps) {
	return <div className={styles.wrapper}>
		{products.map(prod => (
			<ProductCard
				key={prod.id}
				id={prod.id}
				title={prod.name}
				description={prod.ingredients.join(', ')}
				rating={prod.rating}
				price={prod.price}
				image={prod.image}
			/>
		))}
	</div>;
}

export default MenuList;