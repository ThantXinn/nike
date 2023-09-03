import React from 'react'

const ShoeCard = ({ ImgUrl,changeBigShoeImage,bigShoeImg}) => {
    const handleClick = () => {
        if (bigShoeImg !== ImgUrl.bigShoe) {
           changeBigShoeImage(ImgUrl.bigShoe)
       }
   }

  return (
      <div className={`border-2 rounded-xl ${bigShoeImg === ImgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer
        max-sm:flex-1
        `}
          onClick={handleClick}
      >
          {/* <label>{ImgUrl.bigShoe}, { bigShoeImg}</label> */}
          <div className='flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4'>
              <img
                  src={ImgUrl.thumbnail}
                  alt='shoe collection'
                  width={157}
                  height={103}
                  className='object-cover'
              />
          </div>
    </div>
  )
}

export default ShoeCard