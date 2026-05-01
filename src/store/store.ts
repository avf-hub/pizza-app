import { configureStore } from '@reduxjs/toolkit';
import userReducer, { JWT_PERSISTENT_STATE } from './user.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
		user: userReducer
	}
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;