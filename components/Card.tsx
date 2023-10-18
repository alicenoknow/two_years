import React from 'react';
import Image from 'next/image';

const IMAGE_SIZE = 400;

const Card = ({ number, text, imageOrGifUrl }: { number: number, text: string, imageOrGifUrl: string }) => {
    return (<div>
        <div className='clickhere'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Powód {number}</span></h1></div>
        <div className="showme">
            <div className="pb-4">{text}</div>
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