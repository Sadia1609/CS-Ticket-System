import React from 'react';
import twitterImg from '../../assets/twitter.png';
import linkedinImg from '../../assets/linkedin.png';
import fbImg from '../../assets/fb.png';
import mailImg from '../../assets/mail.png';



const Footer = () => {
    return (
        <footer className='w-full bg-black text-white'>
            <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>

                <div>
                    <h3 className='font-semibold text-lg'>CS - Ticket System</h3>
                    <p className='mt-3 text-sm text-gray-400'>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                    </p>
                </div>

                <div className='ml-10'>
                    <h3 className='font-semibold text-lg'>Company</h3>
                    <ul className='mt-5 text-sm text-gray-400 space-y-3'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Sales</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-semibold text-lg'>Services</h4>
                    <ul className='mt-5 text-sm text-gray-400 space-y-3'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-semibold text-lg'>Information</h4>
                    <ul className='mt-5 text-sm text-gray-400 space-y-3'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-semibold text-lg'>Social Links</h4>
                    <ul className='mt-5 text-sm text-gray-400 space-y-5 '>
                        <li className='flex items-center gap-2 '><img src={twitterImg} alt="" />@CS-Ticket System</li>
                        <li className='flex items-center gap-2'><img src={linkedinImg} alt="" />@CS-Ticket System</li>

                        <li className='flex items-center gap-2'><img src={fbImg} alt="" />@CS-Ticket System</li>

                        <li className='flex items-center gap-2'><img src={mailImg} alt="" />support@cst.com</li>


                    </ul>
                </div>
            </div>

            <div className='mt-10  border-t text-center py-4 border-neutral-800'>
                <p className='text-xs text-white'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;