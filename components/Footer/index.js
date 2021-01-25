import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto flex flex-row justify-between bg-white ">
      <div className="flex flex-col p-5 w-5/12">
        <div className="text-lg font-medium mb-5">About Us</div>
        <div className="">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love</div>
        <div className="">All copyrights reserved 2020 - Health Explore</div>
      </div>
      <div className="flex flex-col p-5 w-1/3">
        <div className="text-lg font-medium mb-5">Sitemap</div>
        <div className="">Nurses</div>
        <div className="">Employers</div>
        <div className="">Social Networking</div>
        <div className="">Jobs</div>
      </div>
      <div className="flex flex-col p-5 w-1/3">
        <div className="text-lg font-medium mb-5">Privacy</div>
        <div className="">Terms of use</div>
        <div className="">Privacy Policy</div>
        <div className="">Cookie Policy</div>
      </div>
    </div>
  );
};
export default Footer;
