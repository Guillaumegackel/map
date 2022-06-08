import React, {useState} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import useStyles from './styles'

const List = () => {
	const classes=useStyles();
	const [type, setType] = useState('');
	const [rating, setRating] = useState('');

	const places =[
		{name:'lieu sympa'},
		{name:'La meilleure bière'},
		{name:'Le meilleur burger'},
		{name:'lieu sympa'},
		{name:'La meilleure bière'},
		{name:'Le meilleur burger'},
		{name:'lieu sympa'},
		{name:'La meilleure bière'},
		{name:'Le meilleur burger'},
	];

  return (
<div className={classes.container}>
	<Typography variant='h4'>Restaurants, Loisirs & Hotels autour de vous</Typography>
	<FormControl className={classes.formControl}>
		<InputLabel>Type</InputLabel>
		<Select value={type} onChange={(e) => setType(e.target.value)}>
			<MenuItem value='restaurants'>restaurants</MenuItem>
			<MenuItem value='hotels'>hotels</MenuItem>
			<MenuItem value='Loisirs'>Loisirs</MenuItem>
		</Select>
	</FormControl>

	<FormControl className={classes.formControl}>
		<InputLabel>Rating</InputLabel>
		<Select value={rating} onChange={(e)=> setRating(e.target.value)}>
			<MenuItem value={0}>Tout</MenuItem>
			<MenuItem value={3}>Superieur à 3</MenuItem>
			<MenuItem value={4}>Superieur à 4</MenuItem>
			<MenuItem value={4.5}>Superieur à 4.5</MenuItem>
		</Select>
	</FormControl>
	<Grid container spacing={3} className={classes.list}>
{places?.map((place, i)=>(
	<Grid item key={i} xs={12}>
		<PlaceDetails place={place}/>
	</Grid>
))}
	</Grid>
</div>
	
	  )
}

export default List