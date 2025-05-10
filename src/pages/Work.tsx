import { Box, Stack, Typography } from '@mui/material'; import React from 'react';
import WorkDescription from '../components/WorkDescription/WorkDescription';

const Work = () => {
  const fontSx = { fontSize: { xs: '20px', sm: '25px' }, color: 'black' };
  return (
    <Stack
      justifyContent='center'
      sx={{ gap: { sm: '100px', xs: '50px' } }}
      paddingY='2rem'
      paddingX={{ sm: '20rem', xs: '20px' }}
    >

      <Typography
        color="black" fontWeight="300"
        sx={{
          fontSize: { xs: '30px', sm: '40px' }
          , textAlign: {
            sm: 'center'
            , xs: 'left'
          }
        }}
      >
        Work Experience
      </Typography>
      {[
        {
          jobTimeLine: '2022 - Present',
          jobTitle: 'Senior FrontEnd Engineer - Micron Technologies',
          jobDescription:
            'As a Senior Frontend Engineer at Micron Technologies, I lead the development of innovative web applications, ensuring high performance and user experience. I collaborate with cross-functional teams to deliver scalable solutions and mentor junior developers.',
          techStack: 'React, Next.js, TypeScript, Redux, Material UI',
        },
        {
          jobTimeLine: '2020 - 2022',
          jobTitle: 'Frontend Developer - ABC Corp',
          jobDescription:
            'Developed and maintained web applications, optimized performance, and ensured responsive design. Worked closely with designers and backend developers to deliver seamless user experiences.',
          techStack: 'Vue.js, JavaScript, Tailwind CSS, Vuex',
        },
        {
          jobTimeLine: '2018 - 2020',
          jobTitle: 'Junior Developer - XYZ Solutions',
          jobDescription:
            'Assisted in building web applications, fixed bugs, and implemented new features. Gained experience in modern web development practices and tools.',
          techStack: 'Angular, TypeScript, Bootstrap, RxJS',
        },
        {
          jobTimeLine: '2016 - 2018',
          jobTitle: 'Intern - Web Development - DEF Inc.',
          jobDescription:
            'Worked on small-scale projects, learned the basics of web development, and contributed to team projects under supervision.',
          techStack: 'HTML, CSS, JavaScript, jQuery',
        },
        {
          jobTimeLine: '2015 - 2016',
          jobTitle: 'Freelance Web Developer',
          jobDescription:
            'Designed and developed websites for small businesses, ensuring responsive design and cross-browser compatibility.',
          techStack: 'WordPress, PHP, MySQL, CSS',
        },
      ].map((job, index) => (
        <Stack
          key={index}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <WorkDescription
            jobTimeLine={job.jobTimeLine}
            jobTitle={job.jobTitle}
            jobDescription={job.jobDescription}
            techStack={job.techStack}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default Work;