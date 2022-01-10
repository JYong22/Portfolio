import React from "react";
import Header from './headerBar';
import linkedIn from '../images/linkedin.png';
import github from '../images/github.png';
import { Heading,Text,Stack, Flex, Link, Box, Image } from '@chakra-ui/react'


import links from '../links/links.json';

import '../css/stars.css';
import '../css/home.css';




function Home(){
    return(
        <div id = 'home'>
            
                <div id = 'home-welcome'>
                    <Text 
                        bgGradient='linear(to-l,  #cae5ff, #9fd9ff);'
                        bgClip='text'
                        fontSize={['10vw','6vw', '5vw']} 
                        id = 'home-welcome1'>
                       Johnson Yong
                    </Text>

                    <Text 
                        bgGradient='linear(to-l,  #88b8e6, #76c8ff)'
                        bgClip='text'
                        fontSize={['5vw','3vw', '2vw']} 
                        id = 'home-welcome2'>
                        Software Engineer Student
                    </Text>

                    <div id = "home-social">
                        
                        <Link href = {links.linkedin}>
                            <Box boxSize={['10vw','5vw','3vw']}>
                                <Image  src = {linkedIn} alt = 'linkedin'/>
                            </Box>
                        </Link>
                        <Link href = {links.github} marginLeft={2}>
                            <Box boxSize={['10vw','5vw','3vw']}>
                                <Image  src = {github} alt = 'linkedin'/>
                            </Box>
                        </Link>

                    </div>
                </div>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
        </div>
    );

}



export default Home;