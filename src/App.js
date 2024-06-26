import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import RootLayout from './components/RootLayout.jsx'
import EventsPage, { loader as eventsLoader } from './pages/EventsPage.jsx'
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetailPage.jsx'
import NewEventPage from './pages/NewEventPage.jsx'
import EditEventPage from './pages/EditEventPage.jsx'
import EventsLayout from './pages/EventsLayout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { action as manipulateEventAction } from './components/EventForm.jsx'
import NewsletterPage, { action as newsletterAction } from './pages/NewsletterPage.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{ index: true, element: <EventDetailPage />, action: deleteEventAction },
							{ path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
						],
					},

					{ path: 'new', element: <NewEventPage />, action: manipulateEventAction },
				],
			},
			{ path: 'newsletter', element: <NewsletterPage />, action: newsletterAction },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
