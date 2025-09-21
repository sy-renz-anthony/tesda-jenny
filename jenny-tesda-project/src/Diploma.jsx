import {Link, Router} from 'react-router-dom';

import Marquee from "react-fast-marquee";

import logo from "./assets/TESDA-emblem-blue.png";
import banner from "./assets/banner.png";
import headerPic from "./assets/heading_pic.png"
import icon from "./assets/icon.png";
import contentPic from "./assets/content-pic-1.png";
import visionMission from "./assets/mission-vision.png";
import file70 from "./assets/diploma/70_SUPPORT_FOUND.pdf";
import fileInstructionalMaterials from "./assets/diploma/INSTRUCTIONAL_MATERIALS.pdf";
import fileRemaining from "./assets/diploma/REMAINING.pdf";

import {AiFillFacebook, AiFillInstagram, AiFillTikTok} from "react-icons/ai";
import  {MdEmail, MdCall} from "react-icons/md";
import { GoDotFill } from "react-icons/go";



function Diploma() {

  return (
    <div className="background relative flex flex-col w-full min-h-screen top-0 left-0 bg-cover bg-center">
      <div className='header fixed top-0 left-0 bg-white shadow relative w-full h-20 top-0 left-0 flex flex-row items-center'>
        <div className="flex flex-row w-full">
          <img src={logo} className="relative h-10 w-auto mx-5 my-auto"/>
          <h1 className="text-green-600 text-xs sm:text-xl xl:text-2xl font-bold py-auto">Technical Education and Skills Development Authority</h1>
        </div>
        <div className="flex w-fit lg:w-full justify-end">
          <img src={banner} className="relative hidden lg:block h-5 sm:h-10 w-auto mx-2 sm:mx-10"/>
        </div>
        <div className="w-full flex flex-col items-end justify-end text-end text-sm text-orange-600 text-xs">
          <a href="tel:+630354229481" className="flex flex-row hover:text-green-600"><MdCall className="w-5 h-5 mr-2" /><p className="mr-7">09179106440</p></a>
          <a href="tel:+630354229481" className="flex flex-row hover:text-green-600"><MdCall className="w-5 h-5 mr-2" /><p className="mr-7">09560063870</p></a>
          <a href="mailto:region7.negrosoriental@tesda.gov.ph" className="flex flex-row hover:text-green-600"><MdEmail className="w-5 h-5 mr-2" /><p className="mr-5 hidden sm:block">region7.negrosoriental@tesda.gov.ph</p><p className="mr-5 block sm:hidden">region7.negor...</p></a>
        </div>
      </div>
      <div className="content w-full min-h-screen min-h-100 top-0 left-0 flex flex-grow bg-cover bg-center"  style={{ backgroundImage: `url(${contentPic})` }} >
        <div className="relative w-full h-auto flex flex-col mx-10 sm:mx-40 my-10 items-center bg-white shadow rounded-2xl">
          <div className="w-full h-auto justify-center items-center">
              <img src={headerPic} className="relative w-full max-h-60"/>
          </div>
          <div className="relative w-full h-auto px-3 bg-orange-500 sm:px-20 mt-6 mb-3 py-3">
            <Marquee className="text-white text-lg sm:text-2xl font-bold" gradient={true} gradientWidth={100} gradientColor={[50, 50, 50]} speed={100} pauseOnHover>Welcome to TESDA Scholarships Document&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
          </div>
          <h1 className="text-gray-800 text-center font-bold text-xl sm:text-3xl mt-5 mx-auto hidden sm:block">TESDA Scholarships Billing Documents:</h1>
          <div className="relative top-0 left-0 w-auto h-full flex flex-col sm:flex-row m-10 gap-10">
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col w-full h-auto items-center">
                <img src={icon} className="w-auto h-fit"/>
              </div>
              <img src={visionMission} className="relative w-full h-auto px-2 py-2"/>
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center">
              <h1 className="text-gray-800 text-center font-bold text-xl sm:text-3xl mt-5 mx-auto block sm:hidden">TESDA Scholarships Billing Documents:</h1>
              <ul className='text-gray-800 font-bold text-lg sm:text-2xl my-5'>
                
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={file70}
                  target="_blank"
                  rel="noopener noreferrer"
                >50% Training Cost & 70% Training Support Fund</a>
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileInstructionalMaterials}
                  target="_blank"
                  rel="noopener noreferrer"
                >Instructional Materials</a>
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileRemaining}
                  target="_blank"
                  rel="noopener noreferrer"
                >Remaining 50% Training Cost & 30% Training Support Fund</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className='footer bg-green-900 relative w-full h-30 bottom-0 left-0 items-center text-white text-xs px-5 py-5 flex flex-col'>
        <div className="relative top-0 left-0 w-full h-auto flex flex-row justify-center">
          <AiFillFacebook className="inline-block text-white mx-10" size={35} />
          <AiFillInstagram className="inline-blox text-white mx-10" size={35} />
          <AiFillTikTok className="inline-blox text-white mx-10" size={35} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-auto pb-2 flex flex-row">
          <p className="w-full ml-10">Developed by: Jenny R. Dael &trade;</p>
          <p className="w-full text-center">OJT from NORSU - Siaton Campus</p>
          <p className="w-full text-right mr-10">SY: 2025-2026</p>
        </div>
      </div>
    </div>
  )
}

export default Diploma