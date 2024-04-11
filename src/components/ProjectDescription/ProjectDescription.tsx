import { Card, Stack, Box, Typography, Button } from "@mui/material";

import React from "react";

type Props = {
    image: string,
    title: string,
    description: string,
    timeline: string,
    role: string,
    link: string
}

const ProjectDescription = (props: Props) => {
    return (
        <>
            <Card
                sx={{
                    flexDirection: 'column',
                    width: '60%',
                    paddingY: '40px'
                }}
            >
                <Stack direction='row' alignItems='center'>
                    <Stack flexGrow={1} alignItems='center'>
                        <img src={props.image} />
                    </Stack>
                    <Stack flexGrow={1}>
                        <Box
                            fontWeight={600}
                            fontSize={25}
                        >
                            {props.title}
                        </Box>
                        <Box paddingY='10px'>
                            {props.description}
                        </Box>
                        <Box paddingY='5px'>
                            {props.timeline}
                        </Box>
                        <Box paddingY='5px'>
                            {props.role}
                        </Box>
                        <Box
                            component='a'
                            href={props.link}
                            paddingY='5px'
                        >
                            <Button>
                                Visit Website
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Card>
        </>
    );
};

export default ProjectDescription;
