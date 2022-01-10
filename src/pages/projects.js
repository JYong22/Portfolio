import React from 'react';
import '../css/projects.css';
import links from '../links/links.json';
import { Heading,Text,Stack, Flex, Link, Box, Image } from '@chakra-ui/react';






function ProjectCard(props){ //project cards not being used currently
    return(
        <div className = {props.className}>
            <div className = {props.className + '1'}>
                <div className = {props.className + "2"}>
                </div>
                <div className = {props.className + "2"}>
                </div>
            </div>
        </div>
    );
}


function ProjectLink(props){
    return(
        <Box>
            <a className = {props.a} href = {props.href}>
                <Box className = {props.className}
                w={['30vw','30vw','15vw']} h = {['3vh','3vh','5vh']}
                fontSize = {['1.5vh','1.5vh','2.5vh']}>
                    {props.text}
                </Box>
            </a>
        </Box>
    );
}
function Project3(){
    return(
        <Box marginTop = {['10vh','10vh','5vh']}>
            <ProjectLink a = 'aLink1' className = 'project-link' text = 'Github' href = {links.project3}/>
            <Flex direction = {['column', 'column', 'row']}>
                <Box id = 'project3-2' width = {['90vw','90vw','55vw']} height = {['30vh','30vh','70vh']} marginTop = {['2vh']} marginLeft = {['4vw']}>
                    <div id = "pCards-container3-1">
                        <canvas id = "pCards-container3-2">
                            
                        </canvas>
                    </div>
                </Box>
                <Box width = {['90vw','90vw','35vw']} height = {['45em','50em','70vh']} marginLeft = {['2vw'] } marginTop = {['2vh']} >
                    <Stack margin={6} spacing={6} color = 'white'>
                        <Heading as='h1' size='xl'>
                            Workout Programming Application
                        </Heading>
                        <Text fontSize = {['lg','xl','2xl']}
                        color = 'white'>
                            Fullstack application with the goal of allowing users to create and track their workouts.
                        </Text>
                        <Text fontSize = {['md','lg','xl']}  color = 'white'>
                            - User registration with password encryption.
                        </Text>
                        <Text fontSize = {['md','lg','xl']}  color = 'white'>
                            - A catalog of over 2000 exercises sectioned based on targetted muscle group.
                        </Text>
                        <Text fontSize = {['md','lg','xl']} color = 'white'>
                            - Able to create multiple workouts and add progress whenever you finish a workout.
                        </Text>
                        <Text fontSize = {['md','lg','xl']} color = 'white'>
                            - Can search up users and see their workouts along with their progress.
                        </Text>
                        <Text fontSize = {['md','lg','xl']} color = 'white'>
                            - One to twelve rep max calculator to see your full capabilities in a certain exercise.
                        </Text>

                        <Heading as='h1' size='md' color = 'white'>
                            Utilized: React, Java, Spring Boot and mongoDB.
                        </Heading>
                        
                    </Stack>
                </Box>
            </Flex>

        </Box>
    );
}
function Project4(){
    return(
        <Box marginTop = {['10vh','10vh','5vh']}>
            <ProjectLink a = 'aLink1' className = 'project-link' text = 'Github' href = {links.project4}/>
            <Flex direction = {['column', 'column', 'row']}>
                <Box id = 'project4-2' width = {['90vw','90vw','55vw']} height = {['30vh','30vh','70vh']} marginTop = {['2vh']} marginLeft = {['4vw']}>
                    <div id = "pCards-container4-1">
                        <canvas id = "pCards-container4-2">
                            
                        </canvas>
                    </div>
                </Box>
                <Box width = {['90vw','90vw','35vw']} height = {['45em','50em','70vh']} marginLeft = {['2vw'] } marginTop = {['2vh']} >
                    <Stack margin={6} spacing={6} color = 'white'>
                        <Heading as='h1' size='xl'>
                            Stock Market Tracker
                        </Heading>
                        <Text fontSize = {['lg','xl','2xl']} color = 'white'>
                            Fullstack application that allows users to create a psuedo investment portfolio and track stocks.
                        </Text>
                        <Text fontSize = {['md','lg','xl']}  color = 'white'>
                            - Selection of approximately 4000 stocks you can subscribe to or buy.
                        </Text>
                        <Text fontSize = {['md','lg','xl']}  color = 'white'>
                            - Subcriptions and purchases of stocks are linked with live rates and update.
                        </Text>
                        <Text fontSize = {['md','lg','xl']} color = 'white'>
                            - Wallet functionality allows you to add money or sell stocks to increase your balance.
                        </Text>
                        <Text fontSize = {['md','lg','xl']} color = 'white'>
                            - Login and registration with bcrypt password encryption.
                        </Text>

                        <Heading as='h1' size='md' color = 'white'>
                            Utilized: React, Express, Node.js and MySQL
                        </Heading>
                        
                    </Stack>
                </Box>
            </Flex>

        </Box>
    );
}

class Projects extends React.Component{
    handleScroll(e){
        let element = e.target
        console.log(element);
    }

    render(){
        return(
                <div>
                    <Box id = 'project' 
                    marginTop = {['40vh', '25vh', '20vh']}>
                        <Box id = 'project-title'
                        fontSize = {['7vw','5vw', '3vw']}>
                            <Text color = 'white'>
                            My
                            </Text>
                            <Text id = 'project-title2'>
                            Projects
                            </Text>
                        </Box>
                    </Box>
                    <Text id = 'project-instructions' color = 'white'>
                        Scroll in white box to see projects.

                    </Text>
                    <Box id = 'project1-1'>
                        <ProjectLink a = 'aLink1' className = 'project-link' text = 'Github' href = {links.project1}/>
                        <Flex  direction={['column','column', 'row']}>
                            <Box id = 'project1-2' width = {['90vw','90vw','55vw']} height = {['30vh','30vh','70vh']} marginTop = {['2vh']} marginLeft = {['5vw','5vw','4vw'] }>
                                <div id = "pCards-container1-1">
                                    <canvas id = "pCards-container1-2">
                                        
                                    </canvas>
                                </div>
                            </Box>
                            <Box width = {['90vw','90vw','35vw']} height = {['35em','40em','70vh']} marginLeft = {['0vw','0vw','2vw'] } marginTop = {['2vh']}  >
                                <Stack margin={6} spacing={6}>
                                    <Heading as='h1' size='xl' color = 'white'>
                                        Meeting Scheduling Application
                                    </Heading>
                                    <Text fontSize = {['lg','xl','2xl']} color = 'white'>
                                        Fullstack application with the purpose of reducing time spent arranging meetings.

                                    </Text>
                                    <Text fontSize = {['md','lg','xl']} color = 'white'>
                                        - Guest has the ability to insert their time availability with their name and
                                        selection of multiple time ranges. 
                                        
                                    </Text>
                                    <Text fontSize = {['md','lg','xl']} color = 'white'> 
                                        -Admin functionality includes the ability edit 10 different
                                        time-ranges shown.
                                    </Text>
                                    <Heading as='h1' size='md' color = 'white'>
                                        Utilized: React, Express, Node.js and MySQL.
                                    </Heading>
                                </Stack>
                            </Box>
                        </Flex>
                    </Box>
                    <div id = 'project2-1'>
                        <ProjectLink a = 'aLink1' className = 'project-link' text = 'Github' href = {links.project2}/>
                        <Flex direction = {['column', 'column', 'row']}>
                            <Box id = 'project2-2' width = {['90vw','90vw','55vw']} height = {['30vh','30vh','70vh']} marginTop = {['2vh']} marginLeft = {['4vw']}>
                                <div id = "pCards-container2-1">
                                    <canvas id = "pCards-container2-2">
                                        
                                    </canvas>
                                </div>
                            </Box>
                            <Box width = {['90vw','90vw','35vw']} height = {['45em','50em','70vh']} marginLeft = {['2vw'] } marginTop = {['2vh']} >
                                <Stack margin={6} spacing={6} color = 'white'>
                                    <Heading as='h1' size='xl'>
                                        Store Database Application
                                    </Heading>
                                    <Text fontSize = {['lg','xl','2xl']}
                                    color = 'white'>
                                        Fullstack application with the objective of allowing managers to oversee all operations at a store branch.
                                    </Text>
                                    <Text fontSize = {['md','lg','xl']}  color = 'white'>
                                        - Insert functionality allows the insertion of new employees, ads and update a stock for the game.
                                    </Text>
                                    <Text fontSize = {['md','lg','xl']}  color = 'white'>
                                        - View functionality displays information about the top-selling game and all the games for an inputted genre.
                                    </Text>
                                    <Text fontSize = {['md','lg','xl']} color = 'white'>
                                        - Recommendation function recommends an inputted customer a videogame based on the last genre they have purchased.
                                    </Text>
                                    <Text fontSize = {['md','lg','xl']} color = 'white'>
                                        - Accounting functionality displays revenue and sales information about games and store branches.
                                    </Text>

                                    <Heading as='h1' size='md' color = 'white'>
                                        Utilized: React, Express, Node.js and MySQL.
                                    </Heading>
                                    
                                </Stack>
                            </Box>
                        </Flex>

                    </div>
                    <Project3/>
                    <Project4/>

                    
                </div>
        );
    }
}
export default Projects;



