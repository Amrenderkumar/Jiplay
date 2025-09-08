import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import Latestjob from './Latestjob';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between items-center mx-auto max-w-7xl h-16 px-4'>
        <div className='cursor-pointer'>
          <h1 className='text-3xl font-bold'>
            <div className='inline-block h-10 w-10 rounded-2xl overflow-hidden'>
              <img className='h-15' src="src/assets/db2.jpg" alt="JiPlay" />
            </div>
            Ji<span className='text-[#4334ca]'>play</span>
          </h1>
        </div>
        <div className='items-center gap-5 md:flex hidden'>
          <nav className='flex justify-center font-medium gap-9'>
            <Link to="/">Home</Link>
            <Link to="/internship">Internship</Link>
            <Link to="/trainee">Trainee</Link>
            <Link to="/job">Job</Link>
          </nav>
          <button className='bg-[#4334ca] text-white px-5 py-2 rounded-lg hover:bg-[#3225a5] transition box-content ml-5 cursor-pointer'>
            Sign In
          </button>
          <button className='bg-[#cf0f0f] text-white px-5 py-2 rounded-lg hover:bg-[#f50707] transition box-content cursor-pointer'>
            Log in
          </button>
        </div>
        <div className='md:hidden block'>
          <a className='text-3xl' href="#">&#8801;</a>
        </div>
      </div>
      <div>
        <Header />
        <Categories />
        <Latestjob />
        <Profile />
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard;
