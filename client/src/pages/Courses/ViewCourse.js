import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";
import CourseField from "./CourseField";
import SaveCancelButtonSet from "./SaveCancelButtonSet";
import OptionsMenu from "../../components/OptionsMenu";
import RegulationTable from "./RegulationTable";

const TYPES = {
    simple: "simple",
    points: "points",
};

const FIELDS = {
    code: "courseCode",
    name: "name",
    desc: "description",
    pts: "points",
};

const ViewCourse = ({ course, updateCourse, deleteCourse }) => {
    const [isEdited, setIsEdited] = useState(false);
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [pts, setPts] = useState(0);
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

    useEffect(() => {
        setIsEdited(false);
        setCode(course.courseCode);
        setName(course.name);
        setDesc(course.description);
        setPts(course.points);
    }, [course]);

    const editField = (field, val) => {
        setIsEdited(true);

        switch (field) {
            case FIELDS.code:
                setCode(val);
                return;
            case FIELDS.name:
                setName(val);
                return;
            case FIELDS.desc:
                setDesc(val);
                return;
            case FIELDS.pts:
                setPts(val);
                return;
            default:
                return;
        }
    };

    const cancelEditCourse = () => {
        setIsEdited(false);
        setCode(course.courseCode);
        setName(course.name);
        setDesc(course.description);
        setPts(course.points);
    };

    const saveEditCourse = () => {
        const editedCourse = { ...course };
        editedCourse[FIELDS.code] = code;
        editedCourse[FIELDS.name] = name;
        editedCourse[FIELDS.desc] = desc;
        editedCourse[FIELDS.pts] = pts;

        // TODO: show popup success message
        setIsEdited(false);

        updateCourse(editedCourse);
    };

    return (
        <Flex width="100%" align="center" justify="left" marginTop="20px" p={4} direction="column">
            <Flex mt={12} justify="center" align="center">
                <OptionsMenu
                    item={course}
                    itemType="Course"
                    setOpenConfirmationDialog={setOpenConfirmationDialog}
                    openConfirmationDialog={openConfirmationDialog}
                    confirm={deleteCourse}
                />
            </Flex>
            <CourseField type={TYPES.simple} title="Course Code" value={code} onChange={(c) => editField(FIELDS.code, c)} required={true} />
            <CourseField type={TYPES.simple} title="Course Name" value={name} onChange={(n) => editField(FIELDS.name, n)} />
            <CourseField type={TYPES.simple} title="Description" value={desc} onChange={(d) => editField(FIELDS.desc, d)} />
            <CourseField
                type={TYPES.points}
                title="Points"
                value={pts}
                onChange={(p) => editField(FIELDS.pts, p.target.value)}
                required={true}
            />
            <RegulationTable name="Prerequisites" updateCourse={updateCourse} course={course} regulationType={course.prerequisites} />
            <RegulationTable name="Corequisites" updateCourse={updateCourse} course={course} regulationType={course.corequisites} />
            <RegulationTable name="Restrictions" updateCourse={updateCourse} course={course} regulationType={course.restrictions} />
            <RegulationTable
                name="InformalEquivalents"
                updateCourse={updateCourse}
                course={course}
                regulationType={course.informalEquivalents}
            />
            <SaveCancelButtonSet onCancel={cancelEditCourse} onSave={saveEditCourse} isActive={isEdited} />
        </Flex>
    );
};

export default ViewCourse;
