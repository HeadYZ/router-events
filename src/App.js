import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import RootLayout from './components/RootLayout.jsx'
import EventsPage from './pages/EventsPage.jsx'
import EventDetailPage from './pages/EventDetailPage.jsx'
import NewEventPage from './pages/NewEventPage.jsx'
import EditEventPage from './pages/EditEventPage.jsx'
import EventsLayout from './pages/EventsLayout.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsLayout />,
				children: [
					{ index: true, element: <EventsPage /> },
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EditEventPage /> },
				],
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
