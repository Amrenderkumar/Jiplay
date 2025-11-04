import Categories from './Categories';
import Footer from './Footer/Footer';
import Header from './Header';
import Latestjob from './Latestjob';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import Jobdata from '@/Jobdata';
import { LogIn } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between items-center w-full  h-16 px-4 fixed top-0 left-0 right-0 bg-white z-50 shadow-md'>
        <div className='cursor-pointer'>
          <h1 className='text-3xl font-bold ml-5 text-center'>
            <Link className='flex items-center space-x-2' to="/">
              <div className='inline-block h-10 w-10 rounded-2xl overflow-hidden sm:mr-2 mr-0'>
                <img className='h-full w-full object-cover rounded' src="src/assets/Image/nj.jpg" alt="JiPlay" />
              </div>
              Job<span className='text-[#4334ca]'>Forge</span>
            </Link>
          </h1>
        </div>
        <div className='items-center gap-5 md:flex hidden'>
          <nav className='flex justify-center font-medium gap-9'>
            <Link to="/">Home</Link>
            <Link to="/internship">Internship</Link>
            <Link to="/trainee">Trainee</Link>
            <Link to="/job">Job</Link>
          </nav>
          <button className='bg-[#cf0f0f] text-white px-5 py-2 rounded-lg hover:bg-[#f50707] transition box-content cursor-pointer mr-6' onClick={() => window.location.href = '/Login'}>
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
        {Jobdata.map((job, index) => (
          <Latestjob
            key={index} 
            title={job.title}
            company={job.company}
            type={job.type}
            experience={job.experience}
            location={job.location}
            skills={job.skills}
            date={job.date}
          />
        ))}
        <Profile />
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard;
