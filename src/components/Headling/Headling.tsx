import styles from './Headling.module.css';
import cn from 'classnames';
import type { HeadingProps } from './Headling.props';

function Headling({ children, className, ...props }: HeadingProps) {
	return <h1 className={cn(className, styles.h1)} {...props}>{children}</h1>;
};

export default Headling;