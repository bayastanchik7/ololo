import { Route, Routes } from 'react-router-dom'
import MainPages from '../Pages/MainPages'

const MyRoutes = () => {
	const RUBLICK = [
		{
			path: '/',
			element: <MainPages />,
			key: 1
		}
	]
	return (
		<Routes>
			{RUBLICK.map(item => (
				<Route path={item.path} element={item.element} key={item.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
