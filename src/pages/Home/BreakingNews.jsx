import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] py-4 px-3">
      <button className="px-5 py-2 text-white rounded-sm font-medium text-xl bg-[#D72050] ">Latest</button>
      <Marquee 
      pauseOnHover={true}
      speed={100}
      >
        <Link to="/" className="mr-10 font-semibold text-lg" >I can be a React component, multiple React components, or just some
        text.</Link>
        <Link to="/" className="mr-10 font-semibold text-lg" >I can be a React component, multiple React components, or just some
        text.</Link>
        <Link to="/" className="mr-10 font-semibold text-lg">I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
