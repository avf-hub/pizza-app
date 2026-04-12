import styles from './Button.module.css';
import cn from 'classnames';
import type { ButtonProps } from './Button.props';

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {
	return (
		<button className={cn(className, styles.button, styles.accent, {
			[styles['small']]: appearence === 'small',
			[styles['big']]: appearence === 'big'
		})} {...props}>{children}</button>
	);
}

export default Button;