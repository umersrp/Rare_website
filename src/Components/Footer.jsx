import React from 'react';
import rightarrow from '../asset/right-arrow.png';
import rarelogo from '../asset/rarelog.png';
import facebook from '../asset/facebook (1).png';
import instagram from '../asset/instagram (1).png';
import send from '../asset/send.png'

const Footer = () => {
    return (
        <div className="w-[100%] text-white">
            <div className=" container mx-auto lg:py-0 w-[100%] py-8 md:py-16 px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 p-[10px] lg:p-[50px] gap-6 mt-8">
                    <div className="flex flex-col text-black space-y-4">
                        <h1 className="text-2xl font-bold">Rare Home Groups</h1>
                        <a href="#" className="text-base font-semibold hover:underline">Rare Homes Real Estate</a>
                        <a href="#" className="text-base font-semibold hover:underline">Rare Holiday Homes</a>
                        <a href="#" className="text-base font-semibold hover:underline">Rare Homes Technical Services</a>
                        <a href="#" className="text-base font-semibold hover:underline">Rare Supplies</a>
                        <a href="#" className="text-base font-semibold hover:underline">Rare Media Solutions</a>
                    </div>
                    <div className=" flex flex-col text-black space-y-4">
                        <h1 className="text-2xl font-bold">Experience Rare</h1>
                        <a href="#" className="text-base font-semibold hover:underline">About Us</a>
                        <a href="#" className="text-base font-semibold hover:underline">Agent</a>
                        <a href="#" className="text-base font-semibold hover:underline">Blogs</a>
                        <a href="#" className="text-base font-semibold hover:underline">Contact Us</a>
                        <a href="#" className="text-base font-semibold hover:underline">Media</a>
                    </div>
                    <div className="flex flex-col  text-black space-y-4">
                        <h1 className="text-2xl font-bold">Link</h1>
                        <a href="#" className="text-base font-semibold hover:underline">About Us</a>
                        <a href="#" className="text-base font-semibold hover:underline">Agent</a>
                        <a href="#" className="text-base font-semibold hover:underline">Blogs</a>
                        <a href="#" className="text-base font-semibold hover:underline">Contact Us</a>
                        <a href="#" className="text-base font-semibold hover:underline">Media</a>
                    </div>
                    <div className="flex flex-col  text-black space-y-4">
                        <h1 className="text-2xl font-bold">Newsletter</h1>
                        <div className="flex space-x-4 items-center">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="border rounded-lg w-48 md:w-56 py-2 md:py-3 pl-4  border-color"
                            />
                            <img src={send} alt="Subscribe" className="h-6 w-7 cursor-pointer background rounded-md hover:color color border border-color " />
                        </div>
                        <span className="text-base font-semibold text-gray-400">
                            Subscribe to get the latest property and blog news from us
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between items-center background w-[100%] lg:py-4 md:py-4 px-4 md:px-0 lg:p-[10px]">
                <div className="mb-8 md:mb-0 lg:p-[30px] p-[12px]">
                    <img src={rarelogo} alt="Rare Logo" className="w-32" />
                    <p className="text-xs md:text-sm w-[309px]">
                        Copyright © 2023 RARE All Rights Reserved. Privacy Policy | Terms & Conditions | Cookie Policy
                    </p>
                </div>
                <div className="flex space-x-4 lg:p-0 p-[12px]">
                    <img src={facebook} alt="Facebook" className="h-8" />
                    <img src={instagram} alt="Instagram" className="h-8" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
