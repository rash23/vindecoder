import { VinForm } from './app/form';
import { Error404 } from './app/Error404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LastFiveVins from './app/last-five-results';

export const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/vindecoder" element={<VinForm />} />
					<Route path="vindecoder/results" element={<LastFiveVins />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</Router>
		</>
	);
};
