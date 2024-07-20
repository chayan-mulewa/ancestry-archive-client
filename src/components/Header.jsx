import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../themes/index';
import { MenuButton, Drawer } from './index';
import { useDataContext } from '../contexts/index';

function Header({ isMenuButton, center, right }) {

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
            <header className='h-20 z-50 w-screen fixed px-4 bg-transparent backdrop-blur-md md:px-12 text-white'>
                <Drawer isOpen={isOpen} toggleNav={toggleNav}>
                    <ul className='flex flex-col gap-6 text-center'>
                        {
                            center && center.map((link, index) => {
                                return (
                                    <li key={index} className=''>
                                        <a onClick={() => { setIsOpen(false) }} href={link.href}>{link.title}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <ul className='flex flex-col text-center gap-6'>
                        {
                            isAuthenticated ?
                                <>
                                    <li className=''>
                                        <Link onClick={() => { setIsOpen(false) }} to="/app">App</Link>
                                    </li>
                                </>
                                :
                                <>
                                    {
                                        right && right.map((link, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link onClick={() => { setIsOpen(false) }} to={link.href}>{link.title}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </>
                        }
                    </ul>
                </Drawer>
                <nav className='h-full w-full flex flex-row justify-start items-center text-center text-xl md:justify-between'>
                    <ul className='flex flex-row items-center gap-6'>
                        {isMobile && (
                            <>
                                {
                                    isMenuButton &&
                                    <li style={{ zIndex: '2000' }}>
                                        <MenuButton toggleNav={toggleNav} isOpen={isOpen} />
                                    </li>
                                }
                            </>
                        )}
                        <li>
                            <Link className='transition-all duration-300 ease-in-out hover:text-textColor' to="/">AncestryArchive</Link>
                        </li>
                    </ul>
                    {!isMobile && (
                        <>
                            <ul className='flex flex-row gap-6'>
                                {
                                    center && center.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <a className='transition-all duration-300 ease-in-out hover:text-textColor' href={link.href}>{link.title}</a>
                                            </li>
                                        );
                                    })
                                }
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
                                            {
                                                right && right.map((link, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link to={link.href} className="flex px-8 py-2 justify-center items-center text-center group relative border rounded-sm border-textColor text-textColor overflow-hidden">
                                                                <span className='text-white transition-all duration-200 group-hover:text-black'>{link.title}</span>
                                                                <span style={{ backgroundColor: Theme.color }} className="absolute -z-40 left-0 top-0 h-full w-full -translate-x-full -translate-y-full transition-all duration-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })
                                            }
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
