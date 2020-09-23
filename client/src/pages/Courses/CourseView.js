import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";
import { FieldsPane, RequirementsPane } from "./editables";

const CourseView = ({ course, isEditing, onEdit, onDelete, onChange }) => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [sem, setSem] = useState("");
    const [pts, setPts] = useState(0);

    useEffect(() => {
        setCode(course.courseCode);
        setName(course.name);
        setDesc(course.description);
        setSem(course.semester);
        setPts(course.points);
    }, [course])

    return (
        <Flex direction="column">
            <FieldsPane
                code={code}
                name={name}
                desc={desc}
                sem={sem}
                pts={pts}
                isEditing={isEditing}
                edit={onEdit}
                delete={onDelete}
                onChange={onChange}
            />
            {/* requirements pane */}
        </Flex>
    );
}

export default CourseView;