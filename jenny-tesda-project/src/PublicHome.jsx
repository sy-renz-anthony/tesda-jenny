import {Link, Router} from 'react-router-dom';

import Marquee from "react-fast-marquee";

import logo from "./assets/TESDA-emblem-blue.png";
import banner from "./assets/banner.png";
import headerPic from "./assets/heading_pic.png"
import icon from "./assets/icon.png";
import contentPic from "./assets/content-pic-1.png";
import fileAssessmentCostCACW from "./assets/Assessment_cost _CACW.pdf";
import fileAssessmentCost from "./assets/Assessment_cost.pdf";
import fileTrainingCost from "./assets/training_SUPPORT_FUND.pdf";
import fileEntrepreneurshipCost from "./assets/Entrepreneurship_Cost.pdf";
import fileNewNormal from "./assets/NEW NORMAL ASSISTANCE FORM.pdf";

import {AiFillFacebook, AiFillInstagram, AiFillTikTok} from "react-icons/ai";
import  {MdEmail, MdCall} from "react-icons/md";
import { GoDotFill } from "react-icons/go";



function PublicHome() {

  return (
    <div className="background relative flex flex-col w-full min-h-screen top-0 left-0 bg-cover bg-center">
      <div className='header fixed top-0 left-0 bg-white shadow relative w-full h-20 top-0 left-0 flex flex-row items-center'>
        <div className="flex flex-row w-full">
          <img src={logo} className="relative h-10 w-auto mx-5 my-auto"/>
          <h1 className="text-green-600 text-sm sm:text-xl xl:text-2xl font-bold py-auto">Technical Education and Skills Development Authority</h1>
        </div>
        <div className="flex w-fit lg:w-full justify-end">
          <img src={banner} className="relative hidden sm:block h-5 sm:h-10 w-auto mx-2 sm:mx-10"/>
        </div>
        <div className="w-full flex flex-col items-end justify-end text-end text-sm text-orange-600 text-xs">
          <a href="tel:+630354229481" className="flex flex-row hover:text-green-600"><MdCall className="w-5 h-5 mr-2" /><p className="mr-7">09179106440</p></a>
          <a href="tel:+630354229481" className="flex flex-row hover:text-green-600"><MdCall className="w-5 h-5 mr-2" /><p className="mr-7">09560063870</p></a>
          <a href="mailto:region7.negrosoriental@tesda.gov.ph" className="flex flex-row hover:text-green-600"><MdEmail className="w-5 h-5 mr-2" /><p className="mr-5">region7.negrosoriental@tesda.gov.ph</p></a>
        </div>
      </div>
      <div className="content w-full min-h-screen min-h-100 top-0 left-0 flex flex-grow bg-cover bg-center"  style={{ backgroundImage: `url(${contentPic})` }} >
        <div className="relative w-full h-auto flex flex-col mx-10 sm:mx-40 my-10 items-center bg-white shadow rounded-2xl">
          <div className="w-full h-auto justify-center items-center">
              <img src={headerPic} className="relative w-full max-h-60"/>
          </div>
          <div className="relative w-full h-auto px-3 bg-orange-500 sm:px-20 mt-6 mb-3 py-3">
            <Marquee className="text-white text-lg sm:text-2xl font-bold" gradient={true} gradientWidth={100} gradientColor={[50, 50, 50]} speed={100} pauseOnHover>Welcome to TESDA Scholarships Document</Marquee>
          </div>
          <h1 className="text-gray-800 text-center font-bold text-xl sm:text-3xl mt-5 ml-10">TESDA Scholarships Billing Documents:</h1>
          <div className="relative top-0 left-0 w-auto h-full flex flex-col sm:flex-row m-10 gap-10">
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
              <img src={icon} className="relative w-full max-h-300 rounded-2xl"/>
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center">
              
              <ul className='text-gray-800 font-bold text-lg sm:text-2xl my-5'>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileAssessmentCostCACW}
                  target="_blank"
                  rel="noopener noreferrer"
                >Assessment Cost CACW</a>
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileAssessmentCost}
                  target="_blank"
                  rel="noopener noreferrer"
                >Assessment Cost</a>
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileEntrepreneurshipCost}
                  target="_blank"
                  rel="noopener noreferrer"
                >Entrepreneurship Cost</a>
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileTrainingCost}
                  target="_blank"
                  rel="noopener noreferrer"
                >Training Cost</a>
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; 
                  
                    <Link to="/diploma">Diploma</Link>
                  
                </li>
                <li className="my-15 hover:text-blue-600 flex flex-row items-center"><GoDotFill />&nbsp;&nbsp; <a
                  href={fileNewNormal}
                  target="_blank"
                  rel="noopener noreferrer"
                >New Normal Assist Form (CFSP only)</a>
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

export default PublicHome