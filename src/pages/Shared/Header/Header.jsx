import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-10'>
            <Link to="/">
            <img className='mx-auto' src={logo} alt="" />
            </Link>
            <p className='mt-5 mb-3 text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;