import { Box, Button, Stack, Typography } from '@mui/material'; import React from 'react';

const Contact = () => {
    return (
        <Stack justifyItems='center' alignItems='center' gap={2}>
            <Typography color="black" fontWeight="300" sx={{ fontSize: { xs: '30px', sm: '40px' }, paddingX: { sm: '2rem' }, paddingY: { sm: '2rem' } }}>Contact</Typography>
            <Typography color="black" sx={{ fontSize: { xs: '30px', sm: '20px' }, paddingX: { sm: '5em' } }}>
                Feel feel to reach out for any inquiries or collaborations.
            </Typography>
            <Stack direction="row" alignItems="center" sx={{ paddingY: { sm: "4rem", xs: "1rem" } }} gap="20px">
                <Button className='button'
                    sx={{ paddingX: '6rem', paddingY: '1rem', zIndex: '-1', backgroundColor: 'darkGray', color: 'white' }}>
                    Contact me
                </Button>
            </Stack>
        </Stack >
    );
}

export default Contact;