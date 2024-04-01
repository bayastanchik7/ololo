import { FiAlignJustify } from 'react-icons/fi'
import './Headermainend.css'
import { BsInfoCircle } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa6'
import { Badge, IconButton } from '@mui/material'
import { HiAdjustmentsVertical } from 'react-icons/hi2'

const Headerendmainand: React.FC = () => {
	return (
		<div>
			<div id='Headerendmain'>
				<div className='container'>
					<div className='Headerendmain'>
						<div className='herader0'>
							<IconButton className='nnn' size='large' color='inherit'>
								<FiAlignJustify className='homeIcon' />
							</IconButton>
							<h2>Список категорий</h2>
							<h1>
								<IconButton className='nnn' size='large' color='inherit'>
									<BsInfoCircle className='homeIcon' />
								</IconButton>
							</h1>
							<h1>
								<IconButton className='nnn' size='large' color='inherit'>
									<Badge badgeContent={1} color='error'>
										<FiUser className='homeIcon' />
									</Badge>
								</IconButton>
							</h1>
							<h1>
								<IconButton className='nnn' size='large' color='inherit'>
									<Badge badgeContent={1} color='error'>
										<FaRegHeart className='homeIcon' />
									</Badge>
								</IconButton>
							</h1>
							<h1>
								<IconButton className='nnn' size='large' color='inherit'>
									<Badge badgeContent={1} color='error'>
										<HiAdjustmentsVertical className='homeIcon' />
									</Badge>
								</IconButton>
							</h1>
						</div>
						<select className='popur'>
							<option>Популярное</option>
							<option>Популярное</option>
							<option>Популярное</option>
						</select>
						<a href='#'>Производство</a>
						<select className='new'>
							<option>Новинки</option>
							<option>Новинки</option>
							<option>Новинки</option>
						</select>
						<select className='blog'>
							<option>Блог</option>
							<option>Блог</option>
							<option>Блог</option>
						</select>
						<select className='ionform'>
							<option>Информация</option>
							<option>Информация</option>
							<option>Информация</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Headerendmainand
