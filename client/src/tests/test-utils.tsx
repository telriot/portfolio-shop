import React, { FC, ReactElement } from 'react';
import {
	Queries,
	render,
	RenderOptions,
	RenderResult
} from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';
import store from 'store';
import { Provider } from 'react-redux';

const AllTheProviders: FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>;
		</Provider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
): RenderResult<Queries, HTMLElement> =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
