import React from "react";
import { Flex, Text, Image } from "@chakra-ui/core";
import { OutlineButton, NavigationMenu } from "../../components";
import { colors as c } from "../../colors";

const Home = () => {
    return (
        <Flex height="100vh" width="100%" direction="row">
            <Flex width="75%" backgroundColor={c.darkGrey}>
                <Flex left="1px" justify="flex-start">
                    <NavigationMenu />
                </Flex>
                <Flex width="100%" align="center" justify="center">
                    <Image
                        htmlWidth="1000px"
                        htmlHeight="400px"
                        objectFit="cover"
                        src="./homepageImg.png"
                        alt="Homepage Image of Course Planner's screeshots"
                    />
                </Flex>
            </Flex>
            <Flex width="25%" backgroundColor={c.whiteGrey}>
                <Flex width="100%" direction="column" marginTop="60px">
                    <Flex align="center" justify="center">
                        <Image src="https://cdn.auckland.ac.nz/assets/central/central-services/mediaandmarketing/uoa-logos-2015/uoa-logo-2015-reverse.png" />
                    </Flex>

                    <Flex marginTop="30px" align="center" justify="center">
                        <Text textAlign="center" fontSize="4xl" color={c.uoaBlue}>
                            Course Planner
                        </Text>
                    </Flex>

                    <Flex direction="column" align="center" justify="center">
                        <OutlineButton text="Students" to="/students" />
                        <OutlineButton text="Courses" to="/courses" />
                        <OutlineButton text="Programmes" to="/programmes" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Home;
