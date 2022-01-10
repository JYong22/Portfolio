import React from "react";
import '../css/about.css';
import Me from '../images/me.png';

import Header from './headerBar';
import { Heading,Text,Stack, Flex, Link, Box, Image } from '@chakra-ui/react';

function About(props){
    return(
        <div> 
            <Header className = "hover-underline-white"/>
            <div id = 'about'>

                <Box id = 'about-gradient' margin= {['2.5vh','5vh','7.5vh']}>
                    <Box id = 'about-background' margin= {['1vh','1.5vh','2.5vh']} >
                        <Box id = 'about-header' marginTop = {['2vh','3vh','4vh']}>
                            <Text fontSize = {['7vw','5vw', '3vw']} id = 'about-header1' color = 'white'>
                                About
                            </Text>
                            <Text fontSize = {['7vw','5vw', '3vw']} id = 'about-header2'>
                                Me
                            </Text>
                        </Box>
                        <Flex height = {['30em','35em','60vh']} direction = {['column','column','row']} id = 'about-content' align={'center'} justify={['none','center']}>
                            <Box width = {['60vw','40vw','30vw']} marginLeft={['0','2.5vw']} id = 'about-content-image'>
                                <Image 
                                    boxSize={['100vw','60vw','30vw']}
                                    objectFit='cover' id = 'about-content-image1' src = {Me} alt="Me"/>
                            </Box>
                            <Box marginLeft = {[0,0,8]} marginTop = {['1vh','2vh',0]} textAlign ={['center','center','left']} width = {['70vw','60vw','60vw']} id = 'about-content-text'>
                                <Box id = 'about-content-text1'>
                                    <Text fontSize = {['7.75vw','4.75vw','2.75vw']} id = 'about-content-text1-1' color = 'white'>
                                        Hello, 
                                    </Text>
                                    <Text fontSize = {['7.75vw','4.75vw','2.75vw']} id = 'about-content-text1-2' >
                                        I'm Johnson
                                    </Text>
                                </Box>
                                <br/>
                                <Text fontSize = {['5vw','3vw','2vw']} id = 'about-content-text2' color = 'gray.200'>
                                    I'm currently a third year software engineering student studying at Western University. My goal this year is to seek a software engineering internship with an interest in web development.
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </div>
        </div>
    );

}


export default About;