import Header from '../Shared/Header/Header';
import LeftNav from '../Shared/LeftNav/LeftNav';
import Navbar from '../Shared/Navbar/Navbar';
import RightNav from '../Shared/RightNav/RightNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='border'>
                <LeftNav></LeftNav>
            </div>
            <div className='md:col-span-2 border'>
                <h2 className="text-4xl">News coming soon</h2>
            </div>
            <div className='border'>
                <RightNav></RightNav>
            </div>
            </div>

        </div>
    );
};

export default Home;