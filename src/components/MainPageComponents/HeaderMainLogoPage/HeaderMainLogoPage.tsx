import img1 from '../../../images/1.png'
import { IoPhonePortraitSharp } from 'react-icons/io5'
import { SlBasket } from 'react-icons/sl'
import './HeaderMainLogoPage.css'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import { styled, alpha } from '@mui/material/styles'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto'
	}
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	}
}))

const HeaderMainLogoPage: React.FC = () => {
	return (
		<div>
			<header id='mainLogoPage'>
				<div className='container'>
					<div className='mainLogoPage'>
						<div className='mainLogoPageCenterImg'>
							<img
								className='mainLogoPageCenterImgImg'
								style={{
									objectFit: 'cover'
								}}
								src={img1}
								alt=''
							/>
						</div>
						<div className='mainLogoPageCenterSearch'>
							<Search
								sx={{
									background: 'white'
								}}
							>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									className='seacrch'
									placeholder='Поиск'
									inputProps={{ 'aria-label': 'search' }}
								/>
							</Search>
						</div>
						<div className='mainLogoPageEndTelAndBAsket'>
							<div className='mainLogoPageEndTel'>
								<h3>
									<IoPhonePortraitSharp />
								</h3>
								<span>
									<select>
										<option>0 (501) 906 987</option>
										<option>0 (501) 906 987</option>
										<option>0 (501) 906 987</option>
									</select>
									<h5>Заказать звонок</h5>
								</span>
							</div>
							<div className='mainLogoPageEndBasket'>
								<h3>
									<IconButton className='nnn' size='large' color='inherit'>
										<Badge badgeContent={1} color='error'>
											<SlBasket />
										</Badge>
									</IconButton>
								</h3>
								<span className='sss'>
									<h4>0 руб</h4>
									<h5>Оформить заказ</h5>
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default HeaderMainLogoPage
