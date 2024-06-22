// import React from 'react';
// import { Theme } from '../themes/index';
// import { Header } from '../components/index';
// import FamilyTree from '../assets/images/FamilyTree.svg';
// import AboutUs from '../assets/images/AboutUs.svg';
// import OurMission from '../assets/images/OurMission.svg';
// import WhyStarted from '../assets/images/WhyStarted.svg';
// import WhatFind from '../assets/images/WhatFind.svg';
// import ContactUs from '../assets/images/ContactUs.svg';

// function Home() {
//     return (
//         <>
//             <Header />
//             <main className='bg-bgColor overflow-x-hidden'>
//                 <section id='home' className='min-h-dvh w-screen flex flex-col gap-8 px-4 py-20 justify-center items-center md:flex-row md:px-12'>
//                     <div className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
//                         <h1 className='text-5xl font-bold' >Discover Your <span className='font-bold text-textColor'>Family's History.</span></h1>
//                         <h1 className='text-4xl' >Build your family tree, share stories, and connect with relatives.</h1>
//                         <button className="relative group  flex px-8 py-2 justify-center items-center text-center border rounded-sm border-textColor bg-bgColor text-black overflow-hidden" >
//                             <span className='relative z-10 text-inherit transition-all duration-200 group-hover:text-white'>Get Started for Free !!!</span>
//                             <span style={{ backgroundColor: Theme.color }} className="absolute  inset-0 transition-all duration-300 transform translate-x-0 translate-y-0 group-hover:-translate-x-full group-hover:-translate-y-full"> </span>
//                         </button>
//                     </div>
//                     <div className='h-full w-full flex flex-col justify-end items-center'>
//                         <img className='h-full w-full' src={FamilyTree} alt="" />
//                     </div>
//                 </section>
//                 <section id="about-us" className='min-h-fit w-screen flex flex-col gap-8 px-4 py-20 justify-center items-center md:flex-row md:px-12'>
//                     <div className='h-full w-full flex flex-col justify-end items-center'>
//                         <img className='h-full w-full' src={AboutUs} alt="" />
//                     </div>
//                     <div className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
//                         <h1 className='text-4xl font-bold' ><span className='font-bold text-textColor'>About Us</span></h1>
//                         <p className='text-2xl' >Welcome to AncestryArcive, a place where our family's history comes alive. We are dedicated to preserving and celebrating the stories, traditions, and legacies of our ancestors, ensuring that future generations can understand and appreciate their roots.</p>
//                     </div>
//                 </section>
//                 <section className='min-h-fit w-screen flex flex-col gap-8 px-4 py-20 justify-center items-center md:flex-row md:px-12'>
//                     <div className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
//                         <h1 className='text-4xl font-bold' ><span className='font-bold text-textColor'>Our Mission</span></h1>
//                         <p className='text-2xl' >Our mission is to create a comprehensive and interactive family tree that not only maps out our lineage but also captures the essence of our family's journey through time. We aim to foster connections between family members, share cherished memories, and provide a platform for exploring our rich heritage.</p>
//                     </div>
//                     <div className='h-full w-full flex flex-col justify-end items-center'>
//                         <img className='h-full w-full' src={OurMission} alt="" />
//                     </div>
//                 </section>
//                 <section className='min-h-fit w-screen flex flex-col gap-8 px-4 py-20 justify-center items-center md:flex-row md:px-12'>
//                     <div className='h-full w-full flex flex-col justify-end items-center'>
//                         <img className='h-full w-full' src={WhyStarted} alt="" />
//                     </div>
//                     <div className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
//                         <h1 className='text-4xl font-bold' ><span className='font-bold text-textColor'>Why We Started</span></h1>
//                         <p className='text-2xl' >The idea for this website was born out of a desire to keep our family's history alive. As time passes, stories can be forgotten and connections lost. By documenting our family's past, we hope to honor those who came before us and provide a resource for those who come after.</p>
//                     </div>
//                 </section>
//                 <section className='min-h-fit w-screen flex flex-col gap-8 px-4 py-20 justify-center items-center md:flex-row md:px-12'>
//                     <div className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
//                         <h1 className='text-4xl font-bold' ><span className='font-bold text-textColor'>What You'll Find Here</span></h1>
//                         <p className='text-2xl' >Discover our family's journey through time with an interactive family tree that maps out our lineage. Each family member has a dedicated profile showcasing their stories, photos, and key life events. Explore our collection of anecdotes and narratives in the family stories section, and browse through generations of cherished memories in our curated photo gallery. Stay connected with significant family events on our calendar, and find resources to delve deeper into your own genealogical research.</p>
//                     </div>
//                     <div className='h-full w-full flex flex-col justify-end items-center'>
//                         <img className='h-full w-full' src={WhatFind} alt="" />
//                     </div>
//                 </section>
//                 <section className='min-h-fit w-screen flex flex-col gap-8 px-4 py-20 justify-center items-center md:flex-row md:px-12'>
//                     <div className='h-full w-full flex flex-col justify-end items-center'>
//                         <img className='h-full w-full' src={ContactUs} alt="" />
//                     </div>
//                     <div id='contact-us' className='h-full w-full flex flex-col gap-8 justify-center items-center text-center md:text-start md:items-start'>
//                         <h1 className='text-4xl font-bold' ><span className='font-bold text-textColor'>Contact Us</span></h1>
//                         <p className='text-2xl' >If you have any questions, suggestions, or contributions, please don't hesitate to reach out. We are always here to help and welcome your involvement.</p>
//                         <h1 className='text-2xl'>
//                             <a href="mailto:chayanmulewa@gmail.com">Email - info@ancestryarchive.com</a>
//                         </h1>
//                         <h1 className='text-2xl'>
//                             <a href="tel:+917999698781">Phone - +91 79666 34645</a>
//                         </h1>

//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// }

// export default Home;


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
            <main className='bg-bgColor overflow-x-hidden'>
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
                    spanTitle={" •"}
                    title="About Us"
                    content="Welcome to AncestryArcive, a place where our family's history comes alive. We are dedicated to preserving and celebrating the stories, traditions, and legacies of our ancestors, ensuring that future generations can understand and appreciate their roots."
                    imageSrc={AboutUs}
                    imageAlt="About Us"
                    reverse={true}
                />
                <Section
                    title="Our Mission"
                    spanTitle={" •"}
                    content="Our mission is to create a comprehensive and interactive family tree that not only maps out our lineage but also captures the essence of our family's journey through time. We aim to foster connections between family members, share cherished memories, and provide a platform for exploring our rich heritage."
                    imageSrc={OurMission}
                    imageAlt="Our Mission"
                />
                <Section
                    title="Why We Started"
                    spanTitle={" •"}
                    content="The idea for this website was born out of a desire to keep our family's history alive. As time passes, stories can be forgotten and connections lost. By documenting our family's past, we hope to honor those who came before us and provide a resource for those who come after."
                    imageSrc={WhyStarted}
                    imageAlt="Why We Started"
                    reverse={true}
                />
                <Section
                    title="What You'll Find"
                    spanTitle={" •"}
                    content="Discover our family's journey through time with an interactive family tree that maps out our lineage. Each family member has a dedicated profile showcasing their stories, photos, and key life events. Explore our collection of anecdotes and narratives in the family stories section, and browse through generations of cherished memories in our curated photo gallery. Stay connected with significant family events on our calendar, and find resources to delve deeper into your own genealogical research."
                    imageSrc={WhatFind}
                    imageAlt="What You'll Find Here"
                />
                <Section
                    id={'contact-us'}
                    title="Contact Us"
                    spanTitle={" ."}
                    content="If you have any questions, suggestions, or contributions, please don't hesitate to reach out. We are always here to help and welcome your involvement."
                    imageSrc={ContactUs}
                    imageAlt="Contact Us"
                    reverse={true}
                    contactInfo={{
                        email: "info@ancestryarchive.com",
                        phone: "+91 79666 34645"
                    }}
                />
            </main>
        </>
    );
}

export default Home;
