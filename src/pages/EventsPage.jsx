import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'A dummy event',
		date: '2023-02-22',
		image: 'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
		description: 'Join this amazing event and connect with fellow developers.',
	},
	{
		id: 'e2',
		title: 'fweft',
		date: '2023-02-22',
		image: 'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
		description: 'Join this amazing event and connect with fellow developers.',
	},
]

function EventsPage() {
	return (
		<>
			<h1>Events Page</h1>
			<ul>
				{DUMMY_EVENTS.map(dumEvent => (
					<li key={dumEvent.id}>
						<Link to={dumEvent.id}>{dumEvent.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default EventsPage
