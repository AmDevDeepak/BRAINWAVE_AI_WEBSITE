import { loading } from "../assets";
const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center px-6 h-[3.5rem] rounded-[1.7rem] bg-n-8/80 ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="" />
      AI is generating...
    </div>
  );
};

export default Generating;
