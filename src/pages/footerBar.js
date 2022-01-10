import '../css/footer.css';

import { Heading,Text,Stack, Flex, Link, Box, Image } from '@chakra-ui/react';

function Footer(){
    return(
        <div id = 'footer'>
            <Box id = 'footer-text'
            fontSize ={['7.5vw','5vw','2.5vw']}>
                <Text id = 'footer-text1'>
                    Johnson
                </Text>          
                <Text id = 'footer-text2'>
                    Yong
                </Text>
            </Box>
            <Text id = 'footer-role'
            fontSize ={['5vw','3.5vw','1.5vw']}>
                Software Engineer Student
                
            </Text>

        </div>
    );
}
export default Footer;