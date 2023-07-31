import Chore from '../entities/Chore'
import Button from '@mui/material/Button'
import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

type ChoreCardProps = {
		chore: Chore
	};

function ChoreCard({ chore, sx }: ChoreCardProps & CardProps) {
	return (
		<Card sx={sx}>
			<CardContent>
				<div>{ chore.name }</div>
				<Button variant="contained">Done</Button>
			</CardContent>
		</Card>
	);
}

export default ChoreCard;