import Link from "next/link";
import React from "react";

let Footer = function(props){
    return(
        <div id="contact" >
        <div className="flex flex-col md:grid w-full h-auto bg-[#1F1F1F] items-center">
        <div className="grid grid-col justify-center h-52 md:mb-28 order-2 md:order-1">
                    <div className="m-auto pt-12"><h1 className="text-white font-bold text-xs">FOLLOW DSC NITJ</h1></div>
                        <div className="flex flex-row justify-between w-56">
                            {/* Youtube */}
                            <Link href="https://youtube.com/@DSCNITJ"  rel="noreferrer" target="_blank"><svg className="p-1 h-[35px] w-[35px] fill-white ease-in duration-200 hover:fill-red-600" width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.3405 5.022C27.3405 2.64668 25.5931 0.735884 23.4338 0.735884C20.5091 0.599171 17.5263 0.546387 14.4781 0.546387H13.5278C10.487 0.546387 7.49886 0.599171 4.57414 0.736411C2.4202 0.736411 0.672767 2.65777 0.672767 5.03308C0.540785 6.91169 0.484825 8.79084 0.487992 10.6699C0.482713 12.549 0.542545 14.43 0.667487 16.3126C0.667487 18.6879 2.41493 20.6146 4.56887 20.6146C7.6414 20.7571 10.7931 20.8204 13.9976 20.8152C17.2074 20.8257 20.3503 20.7588 23.4264 20.6146C25.5856 20.6146 27.3331 18.6879 27.3331 16.3126C27.4598 14.4282 27.5178 12.549 27.5126 10.6647C27.5245 8.78552 27.4672 6.90464 27.3405 5.022ZM11.4161 15.8481V5.47594L19.071 10.6594L11.4161 15.8481Z"/></svg></Link>
                            {/* Instagram */}
                            <Link href="https://instagram.com/dscnitj"  rel="noreferrer" target="_blank"><svg className="p-1 h-[40px] w-[35px] fill-white ease-in duration-200 hover:fill-pink-500" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 28 28"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg></Link>
                            {/* Facebook */}
                            <Link href="https://www.facebook.com/DSCNITJ/"  rel="noreferrer"  target="_blank"><svg className="p-1 h-[35px] w-[30px] fill-white ease-in duration-200 hover:fill-blue" width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4737 0.546387H8.47935C7.15574 0.546387 5.88634 1.08028 4.95041 2.03062C4.01447 2.98094 3.48867 4.26988 3.48867 5.61385V8.65433H0.494263V12.7083H3.48867V20.8163H7.48122V12.7083H10.4756L11.4737 8.65433H7.48122V5.61385C7.48122 5.34506 7.58637 5.08727 7.77357 4.8972C7.96075 4.70714 8.21463 4.60036 8.47935 4.60036H11.4737V0.546387Z"/></svg></Link>
                            {/* Twitter */}
                            <Link href="https://twitter.com/GDSCNitj"  rel="noreferrer" target="_blank"><svg className="p-1 h-[35px] w-[35px] fill-white ease-in duration-200 hover:fill-[#1DA1F2]" width="28" height="22" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4924 0.557746C24.4107 1.32079 23.2129 1.90439 21.9453 2.28609C21.265 1.50383 20.3608 0.949382 19.3551 0.697737C18.3494 0.446093 17.2906 0.509393 16.3221 0.879075C15.3535 1.24876 14.5218 1.90699 13.9396 2.76474C13.3573 3.62249 13.0524 4.63837 13.0664 5.675V6.80464C11.0812 6.85611 9.1141 6.41583 7.34026 5.523C5.56643 4.63017 4.04094 3.31252 2.89966 1.68738C2.89966 1.68738 -1.6189 11.8541 8.54784 16.3727C6.22139 17.9519 3.44997 18.7437 0.640381 18.6319C10.8071 24.2801 23.2331 18.6319 23.2331 5.64111C23.232 5.32646 23.2018 5.01258 23.1428 4.70352C24.2956 3.56653 25.1093 2.131 25.4924 0.557746Z"/></svg></Link>
                        </div>
                        </div>
            <div className="m-auto ml-20 mr-20 md:flex justify-between self-center w-10/12 order-1 md:order-2">
                {/* Info about GDSC */}
                <div className="md:inline-flex pb-20">
                    <div className="self-start m-auto row-span-1 w-16 md:w-64 flex justify-center hover:animate-[bounce_2s_linear_infinite]">
                        <svg width="180" height="90" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8113 26.3979L40.0507 16.5247C43.8733 14.2021 45.1777 9.05227 42.9734 5.02467C40.769 0.997064 35.8815 -0.377373 32.059 1.94524L3.99698 19.0126L23.8113 26.3979Z" fill="#EA4335"/>
                            <path d="M36.0439 51.7903C38.8014 51.7903 41.4928 50.2767 42.9706 47.58C45.1749 43.5524 43.8705 38.4027 40.048 36.0801L11.986 19.0128C8.16346 16.6902 3.27593 18.0646 1.07158 22.0922C-1.13276 26.1198 0.17169 31.2696 3.9942 33.5922L32.0562 50.6595C33.3194 51.425 34.6899 51.7903 36.0439 51.7903Z" fill="#4285F4"/>
                            <path d="M63.9585 51.7897C65.3125 51.7897 66.683 51.4244 67.9461 50.6588L96.0081 33.5916L76.4497 26.0496L59.9626 36.0794C56.1401 38.4021 54.8274 43.5518 57.04 47.5794C58.5095 50.2761 61.201 51.7897 63.9585 51.7897Z" fill="#FBBC04"/>
                            <path d="M92.0016 34.7227C94.7591 34.7227 97.4506 33.2178 98.9284 30.5124C101.133 26.4848 99.8283 21.3351 96.0058 19.0125L67.9437 1.94524C64.1212 -0.377369 59.2337 0.997064 57.0294 5.02465C54.825 9.05224 56.1294 14.202 59.952 16.5246L88.014 33.5919C89.2689 34.3574 90.6477 34.7227 92.0016 34.7227Z" fill="#34A853"/>
                        </svg>
                    </div>
                    <div className="flex md:-mt-6 flex-col h-[72px] row-span-1">
                    <h6 className="text-white w-72 font-Space-Grotesk text-40 font-bold md:font-normal text-center md:text-justify w-64 m-auto mt-2">
                        GDSC NITJ
                        <br/>
                        Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. 
                    </h6>
                    </div>
                </div>
                {/* Learn about GDSC */}
                        <div className="">
                            <button className="bg-[#70E852] w-full p-2 pl-10 pr-10 text-md font-bold ease-in duration-100 hover:bg-[#3fcd1b]"><a target={"_blank"} rel="noreferrer" href="https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/">Learn More About GDSC</a></button>
                        </div>
            </div>
        </div>
        <div className='grid md:flex p-4 md:h-16 text-sm bg-[#1F1F1F] md:bg-[#313131] text-center text-white justify-center items-center w-full font-Jakarta font-normal'>
                <Link className="hover:underline mx-4 p-1" href="#">Contact Us</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Institute</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Website</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Terms of Service</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Privacy Policy</Link>
                <p className="p-5 md:hidden"> &copy; 2024 Hackmol.tech</p>
        </div> 
        </div>
    )
}

export default Footer;