import BasicModal from "./basicModal";

const About = () =>
{ 
    const titleHeader = 'About';
    const names = 'John Valiente and Sahir Muhammad Tariq';
    const githubURL = 'https://github.com/smuha538/COMP-4513-Assignment-2.git';
    const aboutContent = 'This project is the dream of tool of every F1 enthusiast seeking to keep with their favourite drivers, look back fondly at the previous seasons, or even learn about their home circuits. This application is developed using React, Tailwind CSS, Material UI, and Supabase.';
    return (
      <BasicModal header={titleHeader} content={aboutContent} authors={names} links={githubURL}/>
    );
}

export default About;