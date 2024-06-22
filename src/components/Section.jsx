import React from 'react';
import { Theme } from '../themes/index';

const Section = ({ id, title, spanTitle, content, imageSrc, imageAlt, reverse = false, buttonText, contactInfo }) => {
    const titleClass = buttonText ? 'text-5xl font-bold' : 'text-4xl font-bold';
    const contentClass = buttonText ? 'text-4xl' : 'text-2xl';

    return (
        <section id={id} className={`min-h-dvh w-screen flex flex-col gap-8 px-4 py-24 justify-center items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} md:px-12`}>
            <div className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
                <h1 className={titleClass}>{title}<span className='font-bold text-textColor'>{spanTitle}</span></h1>
                <p className={contentClass}>{content}</p>
                {buttonText && (
                    <button className="relative group flex px-8 py-2 justify-center items-center text-center border rounded-sm border-textColor bg-bgColor text-black overflow-hidden">
                        <span className='relative z-10 text-inherit transition-all duration-200 group-hover:text-white'>{buttonText}</span>
                        <span style={{ backgroundColor: Theme.color }} className="absolute inset-0 transition-all duration-300 transform translate-x-0 translate-y-0 group-hover:-translate-x-full group-hover:-translate-y-full"></span>
                    </button>
                )}
                {contactInfo && (
                    <div>
                        {contactInfo.email && (
                            <h1 className='text-2xl'>
                                <a href={`mailto:${contactInfo.email}`}>Email - {contactInfo.email}</a>
                            </h1>
                        )}
                        {contactInfo.phone && (
                            <h1 className='text-2xl'>
                                <a href={`tel:${contactInfo.phone}`}>Phone - {contactInfo.phone}</a>
                            </h1>
                        )}
                    </div>
                )}
            </div>
            <div className='h-full w-full flex flex-col justify-end items-center'>
                <img className='h-full w-full' src={imageSrc} alt={imageAlt} />
            </div>
        </section>
    );
}

export default Section;
