import { Badge, IconButton } from '@mui/material'
import './HeaderMainPage.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'

const HeaderMainPage: React.FC = () => {
	return (
		<header id='header'>
			<div className='container'>
				<div className='header'>
					<div className='headerMainLeft'>
						<h1>
							<span>
								<FaMapMarkerAlt />
							</span>
							<select>
								<option>Наш адрес</option>
								<option>Наш адрес</option>
								<option>Наш адрес</option>
							</select>
						</h1>
						<h2>
							<span>
								<FaRegClock />
							</span>
							<select>
								<option>Время работы</option>
								<option>Время работы</option>
								<option>Время работы</option>
							</select>
						</h2>
					</div>
					<div className='headerMainrigth'>
						<h1>Личный кабинет</h1>

						<div className='s'>
							<IconButton className='nnn' size='large' color='inherit'>
								<Badge badgeContent={1} color='error'>
									<SlBasket />
								</Badge>
							</IconButton>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderMainPage
