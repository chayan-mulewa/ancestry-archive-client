import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../themes/index';
import { Button, Drawer } from './index';
import { useDataContext } from '../contexts/index'

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const { isAuthenticated } = useDataContext();

    const toggleNav = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header className='h-20 z-50 w-screen fixed px-4 bg-transparent backdrop-blur-md md:px-12'>
                <nav className='h-full w-full flex flex-row justify-between items-center text-center text-xl'>
                    <ul className='flex flex-row gap-6'>
                        {isMobile && (
                            <li className='flex flex-row gap-6 justify-center items-center text-center relative'>
                                <Button toggleNav={toggleNav} isOpen={isOpen} />
                                <Drawer isOpen={isOpen} toggleNav={toggleNav} >
                                    <a onClick={() => { setIsOpen(false) }} href="/#home">Home</a>
                                    <a onClick={() => { setIsOpen(false) }} href="/#about-us">About Us</a>
                                    <a onClick={() => { setIsOpen(false) }} href="/#contact-us">Contact Us</a>

                                    {
                                        isAuthenticated ?
                                            <>
                                                <Link onClick={() => { setIsOpen(false) }} to="/app">App</Link>
                                            </>
                                            :
                                            <>
                                                <Link onClick={() => { setIsOpen(false) }} to="/signin">Login</Link>
                                                <Link onClick={() => { setIsOpen(false) }} to="/signup">Signup</Link>
                                            </>
                                    }
                                </Drawer>
                            </li>
                        )}
                        <li>
                            <Link className='transition-all duration-300 ease-in-out hover:text-textColor' to="/">AncestryArchive</Link>
                        </li>
                    </ul>
                    {!isMobile && (
                        <>
                            <ul className='flex flex-row gap-6'>
                                <li>
                                    <a className='transition-all duration-300 ease-in-out hover:text-textColor' href="/#home">Home</a>
                                </li>
                                <li>
                                    <a className='transition-all duration-300 ease-in-out hover:text-textColor' href="/#about-us">About Us</a>
                                </li>
                                <li>
                                    <a className='transition-all duration-300 ease-in-out hover:text-textColor' href="/#contact-us">Contact Us</a>
                                </li>
                            </ul>
                            <ul className='flex flex-row gap-6'>

                                {
                                    isAuthenticated ?
                                        <>
                                            <li>
                                                <Link to="/app" className="flex px-8 py-2 justify-center items-center text-center group relative border rounded-sm border-textColor text-textColor overflow-hidden">
                                                    <span className='text-inherit transition-all duration-200 group-hover:text-black'>App</span>
                                                    <span style={{ backgroundColor: Theme.color }} className="absolute -z-40 left-0 top-0 h-full w-full -translate-x-full -translate-y-full transition-all duration-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                                </Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link to="/signin" className="flex px-8 py-2 justify-center items-center text-center group relative border rounded-sm border-textColor text-textColor overflow-hidden">
                                                    <span className='text-inherit transition-all duration-200 group-hover:text-black'>Login</span>
                                                    <span style={{ backgroundColor: Theme.color }} className="absolute -z-40 left-0 top-0 h-full w-full -translate-x-full -translate-y-full transition-all duration-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/signup" className="flex px-8 py-2 justify-center items-center text-center group relative border rounded-sm border-textColor text-textColor overflow-hidden">
                                                    <span className='text-inherit transition-all duration-200 group-hover:text-black'>Signup</span>
                                                    <span style={{ backgroundColor: Theme.color }} className="absolute -z-40 left-0 top-0 h-full w-full -translate-x-full -translate-y-full transition-all duration-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                                </Link>
                                            </li>
                                        </>
                                }
                            </ul>
                        </>
                    )}
                </nav>
            </header>
        </>
    );
}

export default Header;
