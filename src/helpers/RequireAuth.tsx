import type { RootState } from '../store/store';
import type { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({children}: {children: ReactNode}) => {
	const jwt: string | null = useSelector((state: RootState) => state.user.jwt);
	if (!jwt) {
		return <Navigate to="/auth/login" replace />;
	}

	return children;
};