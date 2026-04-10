import styles from './Button.module.css';
import cn from 'classnames';
import type { ButtonProps } from './Button.props';

function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={cn(className, styles.button, styles.accent)} {...props}>{children}</button>
	);
}

export default Button;