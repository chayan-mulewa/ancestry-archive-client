import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Header, Section } from '../components/index';
import FamilyTree from '../assets/images/FamilyTree.svg';
import AboutUs from '../assets/images/AboutUs.svg';
import OurMission from '../assets/images/OurMission.svg';
import WhyStarted from '../assets/images/WhyStarted.svg';
import WhatFind from '../assets/images/WhatFind.svg';
import ContactUs from '../assets/images/ContactUs.svg';

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    }
    const handleEmail = () => {
        window.location.href = "mailto:chayanmulewa@gmail.com";
    }
    const handlePhone = () => {
        window.location.href = 'tel:+917999698781';
    }

    return (
        <>
            <Header
                isMenuButton={true}
                center={[
                    {
                        title: 'Home',
                        href: '/#home'
                    },
                    {
                        title: 'About Us',
                        href: '/#about-us'
                    },
                    {
                        title: 'Contact Us',
                        href: '/#contact-us'
                    }
                ]}
                right={[
                    {
                        title: 'Login',
                        href: '/login'
                    },
                    {
                        title: 'Sign Up',
                        href: '/signup'
                    }
                ]}
            />
            <main className='bg-bgColor text-white overflow-auto '>
                <Section
                    id={'home'}
                    title="Discover Your"
                    spanTitle={"Family's History."}
                    content="Build your family tree, share stories, and connect with relatives."
                    imageSrc={FamilyTree}
                    imageAlt="Family Tree"
                    buttons={[
                        {
                            title: "Get Started for Free !!!",
                            onClick: handleGetStarted
                        }
                    ]}
                />
                <Section
                    id={'about-us'}
                    spanTitle={"."}
                    title="About Us"
                    content="Welcome to AncestryArcive, a place where our family's history comes alive. We are dedicated to preserving and celebrating the stories, traditions, and legacies of our ancestors, ensuring that future generations can understand and appreciate their roots."
                    imageSrc={AboutUs}
                    imageAlt="About Us"
                    reverse={true}
                />
                <Section
                    title="Our Mission"
                    spanTitle={"."}
                    content="Our mission is to create a comprehensive and interactive family tree that not only maps out our lineage but also captures the essence of our family's journey through time. We aim to foster connections between family members, share cherished memories, and provide a platform for exploring our rich heritage."
                    imageSrc={OurMission}
                    imageAlt="Our Mission"
                />
                <Section
                    title="Why We Started"
                    spanTitle={"."}
                    content="The idea for this website was born out of a desire to keep our family's history alive. As time passes, stories can be forgotten and connections lost. By documenting our family's past, we hope to honor those who came before us and provide a resource for those who come after."
                    imageSrc={WhyStarted}
                    imageAlt="Why We Started"
                    reverse={true}
                />
                <Section
                    title="What You'll Find"
                    spanTitle={"."}
                    content="Unravel our family's story! Explore an interactive family tree with personalized profiles bursting with photos, stories, and milestones. Dive into funny anecdotes, cherished photos, and a helpful calendar to keep track of family gatherings. Even embark on your own genealogy journey with our research tools."
                    imageSrc={WhatFind}
                    imageAlt="What You'll Find Here"
                />
                <Section
                    id={'contact-us'}
                    title="Contact Us"
                    spanTitle={"."}
                    content="If you have any questions, suggestions, or contributions, please don't hesitate to reach out. We are always here to help and welcome your involvement."
                    imageSrc={ContactUs}
                    imageAlt="Contact Us"
                    reverse={true}
                    buttons={[
                        {
                            title: "chayanmulewa@gmail.com",
                            onClick: handleEmail
                        },
                        {
                            title: "+91 79996 98781",
                            onClick: handlePhone
                        }
                    ]}
                />
            </main>
        </>
    );
}

export default Home;
