import React from 'react';
import Image from 'next/image';

interface CardProps { 
    number: number; 
    text: string; 
    imageOrGifUrl: string; 
}

const IMAGE_SIZE = 400;

const Card = ({ number, text, imageOrGifUrl }: CardProps) => {
    return (<div>
        <div className='clickhere cursor-pointer rounded-r-full py-2 pt-4 pl-6 mr-6 md:py-4 md:pt-8 md:pl-12 md:mr-16 bg-zinc-900 flex items-center'>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Powód {number}</span>
            </h1>
        </div>
        <div className={`showme-${number % 2 ? "left" : "right"} p-4 px-24 md:p-8 md:px-96`}>
            <div className="pb-4 ">{text}</div>
            <Image
                src={imageOrGifUrl}
                priority
                alt="Image or GIF"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
            />
        </div>
    </div>)
};

export default Card;