import React, { useEffect, useState } from "react";
import { Flex, Text, useToast } from "@chakra-ui/core";
import { FieldsPane, RequirementsPane } from "./editables";

const fields = {
    code: "courseCode",
    name: "name",
    desc: "description",
    sem: "semester",
    pts: "points",
};

const validCourseCodeRegex = /^([A-Za-z])*(\s?)([1-9][0-9][0-9])([A-Za-z]{0,3})$/;

const CourseView = ({ course, isNew, isEditing, onDelete, cancelUpdateCourse, updateCourse, prefillCourse }) => {
    const toast = useToast();

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [sem, setSem] = useState([]);
    const [pts, setPts] = useState(15);

    const setField = {
        code: setCode,
        name: setName,
        desc: setDesc,
        sem: setSem,
        pts: setPts
    };

    useEffect(() => {
        const { points, semester, description, courseCode, name } = course;

        setCode(courseCode || "");
        setName(name || "");
        setDesc(description || "");
        setSem(semester || []);
        setPts(points || 15);

    }, [course])

    const isValidCourseCode = validCourseCodeRegex.test(code);

    const changeField = (field, value) => {
        setField[field](value);
    }

    const saveCourse = () => {
        const editedCourse = { ...course };
        editedCourse[fields.code] = code;
        editedCourse[fields.name] = name;
        editedCourse[fields.desc] = desc;
        editedCourse[fields.sem] = sem;
        editedCourse[fields.pts] = pts;

        updateCourse(editedCourse);
    }

    const handlePrefill = () => {
        const courseCodeArr = code.split(/(\d+)/).filter((e) => e !== "");
        const subject = courseCodeArr[0];
        const courseCode = courseCodeArr.length === 2 ? courseCodeArr[1] : `${courseCodeArr[1]}${courseCodeArr[2]}`;

        const toastBase = {
            title: `Error 404 Course Code Not Found`,
            status: "error",
            duration: 9000,
            isClosable: true,
        };

        prefillCourse(subject.trim(), courseCode.trim())
            .then((res) =>
                updateCourse(res)
            )
            .then((res) =>
                toast({ title: "Course created", description: `Successfully auto-generated ${code}`, status: "success" })
            )
            .catch((e) => toast({ ...toastBase, description: `Course Code: ${code} could not be found on the UoA API` }));
    };

    return (
        <Flex direction="column">
            <FieldsPane
                code={code}
                name={name}
                desc={desc}
                sem={sem}
                pts={pts}
                isNew={isNew}
                isEditing={isEditing}
                onChange={changeField}
                onCancel={cancelUpdateCourse}
                onSave={saveCourse}
                prefillCourse={handlePrefill}
                isValidCourseCode={isValidCourseCode}
            />

            {isNew
                ? (
                    <Flex justifyContent="center" marginTop="20%">
                        <Text fontStyle="italic">First Create the course to add requirements</Text>
                    </Flex>
                ) : (
                    <Flex marginTop="15px">
                        <RequirementsPane course={course} updateCourse={updateCourse} />
                    </Flex>
                )}
        </Flex>
    );
}

export default CourseView;