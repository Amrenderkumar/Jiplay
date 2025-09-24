import Img from "../assets/Man.jpeg";

function Header() {
  return (
    <div className="relative w-full">
      <img className="w-full h-[725px] d-full " src={Img} alt="Man" />
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 mt-7">
        <h2 className="text-4xl font-semibold text-amber-950 drop-shadow-lg p-2">
          Welcome to Jobforge
        </h2>
        <p className="text-lg text-amber-950 drop-shadow-lg p-2">
          The all user to visit the website and apply <br /> for job, internship and Trainee.
        </p>
        <button className="bg-amber-950 text-white font-medium mt-4 py-3 px-6 rounded-lg shadow-md hover:bg-amber-700 transition ml-2" onClick={() => window.location.href = '/Signup'}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;
