import { useRouteError } from 'react-router-dom'
import PageContent from './PageContent.jsx'
import MainNavigation from '../components/MainNavigation.jsx'
function ErrorPage() {
	const error = useRouteError()

	let title = 'An error occured!'
	let message = 'Something went wrong!'

	console.log(error)
	if (error.status === 404) message = 'Could not find page.'
	if (error.status === 500) message = error.data.message

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	)
}

export default ErrorPage
