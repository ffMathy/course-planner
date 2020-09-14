import React from "react";
import { Flex } from "@chakra-ui/core";
import CourseField from "./CourseField";
import SaveCancelButtonSet from "./SaveCancelButtonSet";
import RegulationTable from "./RegulationTable";

const TYPES = {
    simple: "simple",
    points: "points",
    complex: "complex",
};

const CreateCourse = () => {
    const cancelCreateCourse = () => {
        console.log("CANCEL");
    };

    const saveCreateCourse = () => {
        console.log("SAVE");
    };

    return (
        <Flex width="100%" align="center" justify="left" marginTop="20px" p={4} direction="column">
            <CourseField type={TYPES.simple} title="Course Code" required={true} />
            <CourseField type={TYPES.simple} title="Course Name" />
            <CourseField type={TYPES.simple} title="Description" />
            <CourseField type={TYPES.points} title="Points" required={true} />
            <RegulationTable name="Prerequisites" />
            <RegulationTable name="Corequisites" />
            <RegulationTable name="Restrictions" />
            <RegulationTable name="Informal Equivalent" />
            <SaveCancelButtonSet onCancel={cancelCreateCourse} onSave={saveCreateCourse} />
        </Flex>
    );
};

export default CreateCourse;
