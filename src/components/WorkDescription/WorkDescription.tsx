import { Card, Stack, Box, Typography, Button } from "@mui/material";

import React from "react";

type Props = {
    jobTimeLine: string,
    jobTitle: string,
    jobDescription: string,
    techStack: string,
}

const WorkDescription = (props: Props) => {
    return (
        <Stack
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="start"
        >
            <Box flex={1} display="flex" justifyContent="center" alignItems="start">
                <Typography
                    fontWeight={300}
                    fontSize={20}
                    color="black"
                >
                    {props.jobTimeLine}
                </Typography>
            </Box>
            <Box flex={1} display="flex" flexDirection="column" paddingX="20px">
                <Typography
                    color="black">
                    {/* {props.jobTitle} */}
                    Senior FrontEnd Engineer - Micron Technologies
                </Typography>
                <Typography
                    paddingY="10px"
                    color="black">
                    {/* {props.jobDescription} */}
                    Made Web Applications for Micron Technologies, a leading memory and storage solutions provider. I lead the development of innovative web applications, ensuring high performance and user experience. I collaborate with cross-functional teams to deliver scalable solutions and mentor junior developers.
                </Typography>
                <Typography
                    paddingY="10px"
                    color="black">
                    {/* {props.techStack} */}
                    React, Next.js, TypeScript, Redux, Material UI
                </Typography>
            </Box>
        </Stack>
    );
};

export default WorkDescription;
