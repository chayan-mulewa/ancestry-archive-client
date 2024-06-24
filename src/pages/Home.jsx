import React from 'react';
import { Header, Section } from '../components/index';
import FamilyTree from '../assets/images/FamilyTree.svg';
import AboutUs from '../assets/images/AboutUs.svg';
import OurMission from '../assets/images/OurMission.svg';
import WhyStarted from '../assets/images/WhyStarted.svg';
import WhatFind from '../assets/images/WhatFind.svg';
import ContactUs from '../assets/images/ContactUs.svg';

function Home() {
    return (
        <>
            <Header />
            <main className='bg-bgColor overflow-auto '>
                <Section
                    id={'home'}
                    title="Discover Your "
                    spanTitle={"Family's History."}
                    content="Build your family tree, share stories, and connect with relatives."
                    imageSrc={FamilyTree}
                    imageAlt="Family Tree"
                    buttonText="Get Started for Free !!!"
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
                    content="Discover our family's journey through time with an interactive family tree that maps out our lineage. Each family member has a dedicated profile showcasing their stories, photos, and key life events. Explore our collection of anecdotes and narratives in the family stories section, and browse through generations of cherished memories in our curated photo gallery. Stay connected with significant family events on our calendar, and find resources to delve deeper into your own genealogical research."
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
                    contactInfo={{
                        email: "chayanmulewa@gmail.com",
                        phone: "+91 79996 98781"
                    }}
                />
            </main>
        </>
    );
}

export default Home;
