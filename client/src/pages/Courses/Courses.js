import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Divider, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Table, SearchBar } from "../../components";
import CreateCourse from "./CreateCourse";
import ViewCourse from "./ViewCourse";
import useCourses from "./useCourses";

const Courses = () => {
    const [currRow, setCurrRow] = useState("0");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCourse, setSelectedCourse] = useState({});
    const [addingCourse, setAddingCourse] = useState(false);
    const { data, columns, updateCourse, deleteCourse } = useCourses();

    useEffect(() => {
        setSelectedCourse(data[currRow] || {});
    }, [data, currRow]);

    return (
        <Flex height="100vh" width="100%" direction="row" backgroundColor="#F0F0F0">
            <Flex height="100%" width="50%" direction="column">
                <Flex left="1px" justify="flex-start">
                    <Link to="/">
                        <IconButton as={AiFillHome} left="20px" top="20px" size="sm" />
                    </Link>
                </Flex>
                <Flex width="100%" align="center" justify="center" marginTop="20px" p={4}>
                    <Text textAlign="center" fontSize="4xl" color="#113F73">
                        Courses
                    </Text>
                </Flex>

                <Flex width="100%" align="center" justify="center" direction="row">
                    <SearchBar searchCategory="Courses" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <Flex p={2} marginLeft={2}>
                        <Button
                            variantColor="blue"
                            backgroundColor="#162971"
                            onClick={() => {
                                setCurrRow();
                                setAddingCourse(true);
                            }}
                        >
                            <Text textAlign="center" color="white">
                                + Add Course
                            </Text>
                        </Button>
                    </Flex>
                </Flex>

                <Flex p={4}>
                    <Table
                        columns={columns}
                        data={data}
                        getRowProps={(row) => ({
                            onClick: () => {
                                setAddingCourse(false);
                                setCurrRow(row.id);
                            },
                            style: {
                                cursor: "pointer",
                                background: row.id === currRow ? "#0F487E" : null,
                            },
                        })}
                        currRow={currRow}
                        searchInput={searchTerm}
                    />
                </Flex>
            </Flex>
            <Divider orientation="vertical" backgroundColor="#A7C4E0" width="2px" />
            {/* Right side of page */}
            <Flex height="100%" width="50%" direction="column">
                {addingCourse ? <CreateCourse /> : <ViewCourse course={selectedCourse} updateCourse={updateCourse} deleteCourse={deleteCourse} />}
            </Flex>
        </Flex>
    );
};

export default Courses;