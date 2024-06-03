import { json, useLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem.jsx'
function EventDetailPage() {
	const { event } = useLoaderData()
	console.log(event)
	return (
		<>
			<h1>Event Detail Page</h1>
			<EventItem event={event} />
		</>
	)
}

export default EventDetailPage

export async function loader({ request, params }) {
	const id = params.eventId

	const response = await fetch('http://localhost:8080/events/' + id)
	if (!response.ok) {
		throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 })
	} else {
		return response
	}
}
