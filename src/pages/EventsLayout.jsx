import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation.jsx'

function EventsLayout() {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	)
}

export default EventsLayout
