import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import RootLayout from './components/RootLayout.jsx'
import EventsPage from './pages/EventsPage.jsx'
import EventDetailPage from './pages/EventDetailPage.jsx'
import NewEventPage from './pages/NewEventPage.jsx'
import EditEventPage from './pages/EditEventPage.jsx'


// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/events', element: <EventsPage /> },
			{ path: '/events/:eventId', element: <EventDetailPage /> },
			{ path: '/events/new', element: <NewEventPage /> },
			{ path: '/events/:eventId/edit', element: <EditEventPage /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
