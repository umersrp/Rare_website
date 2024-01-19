import React from 'react'

 function Propertyview() {
  return (
    <div> <div className='thumbnail-container'>
    
    
            <div className='flex justify-between gap-x-4 gap-y-4 p-4'>
                <div className="lg:w-1/2 md:w-full h-[600px] ">
                    <img src='' className='rounded-l-[10px] cursor-pointer h-[100%]' alt='' />
                </div>
                <div className="lg:w-1/2 h-[291px] md:w-full  flex justify-between flex-wrap gap-y-4">
                        <img
                            src=''
                            className='lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  rounded-tr-[10px] md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px] rounded-br-[10px]'
                            alt=""
                        />
                </div>
            </div> 
    
    
            <div className='flex justify-between gap-x-[15px] p-[10px]'>
                <div className="w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ">
                        <img src='' className='w-[49.5%] h-[291px] cursor-pointer object-cover rounded-tl-[10px] lg:rounded-0 sm:rounded-10px'  />
                
                </div>
            </div>
    
    
            <div className='flex justify-between gap-x-[15px] p-[10px]'>
                <div className="w-[50%]">
                    <img src='' className='rounded-l-[10px]' alt='' />
                </div>
                <div className="w-[50%] flex justify-between flex-wrap gap-y-[15px]">
                        <img src="" className='w-[49%] h-[291px] cursor-pointer object-cover rounded-tr-[10px] rounded-br-[10px]' />
                    
                </div>
            </div>
    
                <div className='flex justify-between gap-x-[15px] p-[10px]'>
                <div className="w-[100%]">
                    <img src="" className='rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]' />
                </div>

            </div>
    </div>
    </div>
  )
}
export default Propertyview;