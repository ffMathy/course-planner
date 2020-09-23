import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import { FieldsPane, RequirementsPane } from "./editables";

const fields = {
    code: "courseCode",
    name: "name",
    desc: "description",
    sem: "semester",
    pts: "points",
};

const CourseView = ({ course, isNew, isEditing, onEdit, onDelete, cancelUpdateCourse, updateCourse }) => {
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
        setCode(course.courseCode || "");
        setName(course.name || "");
        setDesc(course.description || "");
        setSem(course.semester || []);
        setPts(course.points || 15);
    }, [course])

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
                onEdit={onEdit}
                onDelete={onDelete}
                onChange={changeField}
                onCancel={cancelUpdateCourse}
                onSave={saveCourse}
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