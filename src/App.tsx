import { useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';

function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		setCounter(e.target.value + 1);
	};

	return (
		<>
			<Button onClick={addCounter} >Кнопка {counter}</Button>
			<Button appearence='big' onClick={addCounter} >Кнопка {counter}</Button>
			<Input placeholder='Email'/>
			<div>
				<a href='/'>Меню</a>
				<a href='/cart'>Корзина</a>
			</div>
			<Routes>
				<Route path='/' element={<Menu/>} />
				<Route path='/cart' element={<Cart/>} />
			</Routes>
		</>
	);
}

export default App;
