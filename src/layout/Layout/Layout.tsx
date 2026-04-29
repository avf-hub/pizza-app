import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {
	const navigate = useNavigate();

	const layout = () => {
		localStorage.removeItem('jwt');
		navigate('/auth/login');
	};

	return <div className={styles.layout}>
		<div className={styles.sidebar}>
			<div className={styles.user}>
				<img src='/avatar.png' alt='Аватар пользователя' className={styles.avatar}/>
				<div className={styles.username}>Андрей Фальковский</div>
				<div className={styles.email}>avf-91@yandex.ru</div>
			</div>
			<div className={styles.menu}>
				<NavLink to='/' className={({isActive}) => cn(styles.link, {
					[styles.active]: isActive
				})}>
					<img src='/menu-icon.svg' alt='Иконка меню'/>
					Меню
				</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles.link, {
					[styles.active]: isActive
				})}>
					<img src='/cart-icon.svg' alt='Иконка корзины'/>
					Корзина
				</NavLink>
			</div>
			<Button className={styles.exit} onClick={layout}>
				<img src='/exit-icon.svg' alt='Иконка выхода'/>
				Выход
			</Button>
		</div>
		<div className={styles.content}>
			<Outlet/>
		</div>
	</div>;
}