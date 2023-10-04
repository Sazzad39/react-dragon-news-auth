import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";


const RightNav = () => {
  return (
    <div>
        {/* log in with */}
      <div className='p-4 space-y-3 mb-5'>
        <h2 className="text-2xl font-semibold mb-4">Login With</h2>
        <button className="btn btn-outline mb-6 w-full normal-case text-[#4175d2] ">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline mb-2 w-full normal-case ">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
        {/* find us on */}
      <div className='p-4  mb-6'>
        <h2 className="text-2xl font-semibold mb-4">Find us On</h2>
        <a className='p-4 flex items-center text-xl border rounded-t-md' href="">
            <FaFacebook className='mr-3 ml-4 text-[#3b599c] '></FaFacebook>
            <span>Facebook</span>
        </a>
        <a className='p-4 flex items-center text-xl border-x' href="">
            <FaTwitter className='mr-3 ml-4 text-[#4175d2]'></FaTwitter>
            <span>Twitter</span>
        </a>
        <a className='p-4 flex items-center text-xl border rounded-b-md' href="">
            <FaInstagram className='mr-3 ml-4 text-[#dd3d79] '></FaInstagram>
            <span>Instagram</span>
        </a>
      </div>
        {/* Q-zone */}
      <div className='p-4 space-y-5 mb-6 bg-[#F3F3F3]'>
        <h2 className="text-2xl font-semibold mb-4 mt-4">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
