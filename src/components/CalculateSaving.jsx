import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CalculateSaving = () => {
    const [count, setCount] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Mid-Tier');
    const [prices, setPrices] = useState({
        price: '70.00',
        secondPrice: '75.00',
        estimatePrice: '74.00',
        homePrice: '77.00',
        usinPrice: '78.00',
    });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        setCount(1); 
           const pricingMap = {
            'Mid-Tier': {
                price: '70.00',
                secondPrice: '75.00',
                estimatePrice: '74.00',
                homePrice: '77.00',
                usinPrice: '78.00',
            },
            'Mid-Tier 2': {
                price: '80.00',
                secondPrice: '85.00',
                estimatePrice: '84.00',
                homePrice: '87.00',
                usinPrice: '88.00',
            },
            'Mid-Tier 3': {
                price: '90.00',
                secondPrice: '95.00',
                estimatePrice: '94.00',
                homePrice: '97.00',
                usinPrice: '98.00',
            },
            'Mid-Tier 4': {
                price: '100.00',
                secondPrice: '105.00',
                estimatePrice: '104.00',
                homePrice: '107.00',
                usinPrice: '108.00',
            },
        };

        setPrices(pricingMap[value]);
    };

    const handleAdd = () => {
        if (count < 10) {
            setCount(count + 1);
            const updatedPrices = {
                price: (parseFloat(prices.price) * 1.7).toFixed(2).substring(0,6 ),
                secondPrice: (parseFloat(prices.secondPrice) * 1.7).toFixed(2).substring(0,6 ),
                estimatePrice: (parseFloat(prices.estimatePrice) * 1.7).toFixed(2).substring(0,6 ),
                homePrice: (parseFloat(prices.homePrice) * 1.7).toFixed(2).substring(0,6 ),
                usinPrice: (parseFloat(prices.usinPrice) * 1.7).toFixed(2).substring(0,6 ),
            };

            setPrices(updatedPrices);
        }
    };

    const handleSubtract = () => {
        if (count > 1) {
            setCount(count - 1);
            const updatedPrices = {
                price: (parseFloat(prices.price) / 1.7).toFixed(2).substring(0,6 ),
                secondPrice: (parseFloat(prices.secondPrice) / 1.7).toFixed(2).substring(0,6 ),
                estimatePrice: (parseFloat(prices.estimatePrice) / 1.7).toFixed(2).substring(0,6 ),
                homePrice: (parseFloat(prices.homePrice) / 1.7).toFixed(2).substring(0,6 ),
                usinPrice: (parseFloat(prices.usinPrice) / 1.7).toFixed(2).substring(0,6 ),
            };

            setPrices(updatedPrices);
        }
    };

    return (

        <div className='container xl:max-w-[1280px] mx-auto px-5'>
            <Link to='/'>HomePage</Link>
            <div className="mt-10 lg:mt-12 xl:mt-[60px] flex max-sm:flex-col items-center gap-6 lg:gap-10 max-w-[545px] mx-auto">
                <div className="w-full">
                    <div className="relative">
                        <div
                            className="p-4 outline-none border border-navy-blue rounded-xl font-poppins font-medium text-lg text-black w-full sm:max-w-[301px] min-w-[301px] h-[60px] cursor-pointer flex items-center justify-between"
                            onClick={toggleDropdown}
                        >
                            <span>{selectedValue}</span>
                            <span
                                className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            >
                                <svg
                                    width="23"
                                    height="14"
                                    viewBox="0 0 23 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.09062 1.08816C0.673187 1.26997 0.440188 1.74491 0.52825 2.2346C0.565688 2.44278 1.15431 3.05285 5.80081 7.69941C10.4474 12.3459 11.0574 12.9345 11.2656 12.972C11.8584 13.0786 11.5141 13.3845 17.1992 7.69941C22.8827 2.01591 22.5806 2.35578 22.4705 1.76891C22.4128 1.46128 22.0389 1.08741 21.7313 1.02972C21.1469 0.920033 21.4411 0.661533 16.2654 5.8321L11.4996 10.5933L6.76544 5.8621C4.11394 3.21228 1.95387 1.10216 1.85531 1.0656C1.61994 0.978158 1.32306 0.986908 1.09062 1.08816Z"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </div>

                        {isOpen && (
                            <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-xl shadow-md w-full">
                                <div
                                    className="p-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect('Mid-Tier')}
                                >
                                    Mid-Tier
                                </div>
                                <div
                                    className="p-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect('Mid-Tier 2')}
                                >
                                    Mid-Tier 2
                                </div>
                                <div
                                    className="p-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect('Mid-Tier 3')}
                                >
                                    Mid-Tier 3
                                </div>
                                <div
                                    className="p-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect('Mid-Tier 4')}
                                >
                                    Mid-Tier 4
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleSubtract} aria-label="minus" className="rounded-xl disabled:hover:opacity-100  hover:opacity-70 duration-300 bg-blue-950 flex items-center justify-center size-12 sm:size-[60px]"><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.4998 17.3307H8.49984C8.14622 17.3307 7.80708 17.1903 7.55703 16.9402C7.30698 16.6902 7.1665 16.351 7.1665 15.9974C7.1665 15.6438 7.30698 15.3046 7.55703 15.0546C7.80708 14.8045 8.14622 14.6641 8.49984 14.6641H24.4998C24.8535 14.6641 25.1926 14.8045 25.4426 15.0546C25.6927 15.3046 25.8332 15.6438 25.8332 15.9974C25.8332 16.351 25.6927 16.6902 25.4426 16.9402C25.1926 17.1903 24.8535 17.3307 24.4998 17.3307Z" fill="white"></path></svg>
                    </button>
                    <div className="rounded-xl flex items-center justify-center size-12 sm:size-[60px] border border-blue-950    font-poppins text-2xl font-semibold text-black">{count}</div>
                    <button onClick={handleAdd} aria-label="plus" className="rounded-xl disabled:hover:opacity-100 hover:opacity-70 duration-300 bg-blue-400 flex items-center justify-center size-12 sm:size-[60px]"><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.4998 17.3307H17.8332V23.9974C17.8332 24.351 17.6927 24.6902 17.4426 24.9402C17.1926 25.1903 16.8535 25.3307 16.4998 25.3307C16.1462 25.3307 15.8071 25.1903 15.557 24.9402C15.307 24.6902 15.1665 24.351 15.1665 23.9974V17.3307H8.49984C8.14622 17.3307 7.80708 17.1903 7.55703 16.9402C7.30698 16.6902 7.1665 16.351 7.1665 15.9974C7.1665 15.6438 7.30698 15.3046 7.55703 15.0546C7.80708 14.8045 8.14622 14.6641 8.49984 14.6641H15.1665V7.9974C15.1665 7.64377 15.307 7.30463 15.557 7.05459C15.8071 6.80454 16.1462 6.66406 16.4998 6.66406C16.8535 6.66406 17.1926 6.80454 17.4426 7.05459C17.6927 7.30463 17.8332 7.64377 17.8332 7.9974V14.6641H24.4998C24.8535 14.6641 25.1926 14.8045 25.4426 15.0546C25.6927 15.3046 25.8332 15.6438 25.8332 15.9974C25.8332 16.351 25.6927 16.6902 25.4426 16.9402C25.1926 17.1903 24.8535 17.3307 24.4998 17.3307Z" fill="black"></path></svg></button>
                </div>
            </div>
            <div className="mt-8 lg:mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                <div className="flex flex-col shadow-[0_0_21.4px_0_#0000000F] w-full h-full group rounded-[20px] overflow-hidden false">
                    <div className="bg-blue-900 p-4 sm:p-[18px]">
                        <p className="text-white font-semibold text-2xl !leading-[29px]">AT&amp;T</p>
                        <div className="flex items-center justify-between mt-2">
                            <p className=" text-base text-white opacity-70">Our Deal</p>
                            <p className="font-semibold text-white text-lg !leading-[22px]">$10/line</p>
                        </div>
                    </div>
                    <div className="border border-navy-blue !border-t-0 border-opacity-25 duration-300 rounded-bl-[20px] rounded-br-[20px] ">
                        <div className="p-4 sm:py-[26px] sm:px-[18px] space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-poppins text-base text-cyan-blue max-w-[214px]">{count} line(s) w/ AutoPay discount</p>
                                <p className="font-bold text-cyan-blue font-poppins text-[22px]">{prices.price}/<span className="text-sm">mo.</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <p className=" font-poppins text-base text-cyan-blue max-w-[214px]">Est. min. taxes &amp; fees</p><p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">18%</p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <p className=" font-poppins text-base text-cyan-blue max-w-[214px]">Similar streaming services</p>
                                <p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">Included</p></div>
                            <div className="flex items-center justify-between gap-2"><p className=" font-poppins text-base text-cyan-blue max-w-[214px]">5G Access</p>
                                <p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">Included</p>
                            </div>
                        </div>
                        <div className="p-4 sm:py-[15px] sm:px-[18px] border-t border-opacity-20 border-cyan-blue flex items-center justify-between gap-2"><p className="font-poppins text-base text-cyan-blue font-semibold">Estimated Total</p><p className="font-bold text-cyan-blue font-poppins text-[22px]">{prices.estimatePrice}/<span className="text-sm">mo.</span></p></div>
                    </div></div>
                <div className="flex flex-col shadow-[0_0_21.4px_0_#0000000F] w-full h-full group rounded-[20px] overflow-hidden false"><div className="bg-blue-900 p-4 sm:p-[18px]">
                    <p className="drop-shadow-[0_0_7.2px_0_#0000001F] text-white font-inter font-semibold text-2xl !leading-[29px]">AT&amp;T</p><div className="flex items-center justify-between mt-2">
                        <p className=" font-poppins text-base text-white opacity-70">Through Retails</p>
                        <p className="drop-shadow-[0_0_7.2px_0_#0000001F] font-inter font-semibold text-white text-lg !leading-[22px]">$5/line</p>
                    </div>
                </div>
                    <div className="border border-navy-blue !border-t-0 border-opacity-25 duration-300 rounded-bl-[20px] rounded-br-[20px] group-hover:border-opacity-100">
                        <div className="p-4 sm:py-[26px] sm:px-[18px] space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-poppins text-base text-cyan-blue max-w-[214px]">{count} line(s) w/ AutoPay discount</p>
                                <p className="font-bold text-cyan-blue font-poppins text-[22px]" >{prices.secondPrice}/<span className="text-sm">mo.</span>
                                </p>
                            </div>
                            <div className="flex items-center justify-between gap-2"><p className=" font-poppins text-base text-cyan-blue max-w-[214px]">Est. min. taxes &amp; fees</p><p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">18%</p></div>
                            <div className="flex items-center justify-between gap-2">
                                <p className=" font-poppins text-base text-cyan-blue max-w-[214px]">Similar streaming services</p>
                                <p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">Included</p></div>
                            <div className="flex items-center justify-between gap-2"><p className=" font-poppins text-base text-cyan-blue max-w-[214px]">5G Access</p><p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">Included</p>
                            </div>
                        </div>
                        <div className="p-4 sm:py-[15px] sm:px-[18px] border-t border-opacity-20 border-cyan-blue flex items-center justify-between gap-2">
                            <p className="font-poppins text-base text-cyan-blue font-semibold">Estimated Total</p><p className="font-bold text-cyan-blue font-poppins text-[22px]">{prices.homePrice}/<span className="text-sm">mo.</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col shadow-[0_0_21.4px_0_#0000000F] w-full h-full group rounded-[20px] overflow-hidden sm:translate-x-1/2 lg:translate-x-0">
                    <div className="bg-blue-900 p-4 sm:p-[18px]">
                        <p className="drop-shadow-[0_0_7.2px_0_#0000001F] text-white font-inter font-semibold text-2xl !leading-[29px]">AT&amp;T</p><div className="flex items-center justify-between mt-2">
                            <p className=" font-poppins text-base text-white opacity-70">Using Us</p>
                            <p className="drop-shadow-[0_0_7.2px_0_#0000001F] font-inter font-semibold text-white text-lg !leading-[22px]">$5-25$/line</p>
                        </div>
                    </div>
                    <div className="border border-navy-blue !border-t-0 border-opacity-25 duration-300 rounded-bl-[20px] rounded-br-[20px] group-hover:border-opacity-100">
                        <div className="p-4 sm:py-[26px] sm:px-[18px] space-y-3 sm:space-y-4"><div className="flex items-center justify-between gap-2">
                            <p className="font-poppins text-base text-cyan-blue max-w-[214px]">{count} line(s) w/ AutoPay discount</p><p className="font-bold text-cyan-blue font-poppins text-[22px]">{prices.price}/<span className="text-sm">mo.</span></p></div><div className="flex items-center justify-between gap-2">
                                <p className=" font-poppins text-base text-cyan-blue max-w-[214px]">Est. min. taxes &amp; fees</p>
                                <p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">18%</p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <p className=" font-poppins text-base text-cyan-blue max-w-[214px]">Similar streaming services</p>
                                <p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">Included</p></div>
                            <div className="flex items-center justify-between gap-2"><p className=" font-poppins text-base text-cyan-blue max-w-[214px]">5G Access</p><p className="font-medium text-cyan-blue font-poppins text-lg !leading-[27px]">Not Included</p>
                            </div>
                        </div>
                        <div className="p-4 sm:py-[15px] sm:px-[18px] border-t border-opacity-20 border-cyan-blue flex items-center justify-between gap-2">
                            <p className="font-poppins text-base text-cyan-blue font-semibold">Estimated Total</p><p className="font-bold text-cyan-blue font-poppins text-[22px]">{prices.usinPrice}/<span className="text-sm">mo.</span>
                            </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculateSaving