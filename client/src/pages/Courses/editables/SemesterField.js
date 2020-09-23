import React, { useEffect, useState } from "react";
import { Flex, Text, Stack, Checkbox } from "@chakra-ui/core";
import { colors as c } from "../../../colors";

const semMapping = ["S1", "S2", "SS"];

const SemsterField = ({ value, isEditing, onChange }) => {
    const [checkedSems, setCheckedSems] = useState([]);

    useEffect(() => {
        setCheckedSems([value.includes("S1"), value.includes("S2"), value.includes("SS")]);
    }, [value]);

    const updateSem = i => {
        const sems = checkedSems;
        sems[i] = !sems[i]; // Check/uncheck the semester

        const semesters = [];

        // Determine which semester strings are checked
        for (let j = 0; j < 3; j++) {
            sems[j] && semesters.push(semMapping[j]);
        }

        onChange("sem", semesters);
    }

    return (
        <Flex direction="column">
            <Text color={c.darkBlue} fontWeight="bold">Semester:</Text>

            {!isEditing
                ? (
                    <Text textAlign="center" fontSize="large">{value.join(", ")}</Text>
                ) : (
                    <Stack spacing={10} isInline>
                        <Checkbox borderColor={c.lightBlue} isChecked={checkedSems[0]} onChange={e => updateSem(0)}>
                            S1
                        </Checkbox>
                        <Checkbox borderColor={c.lightBlue} isChecked={checkedSems[1]} onChange={e => updateSem(1)}>
                            S2
                        </Checkbox>
                        <Checkbox borderColor={c.lightBlue} isChecked={checkedSems[2]} onChange={e => updateSem(2)}>
                            SS
                        </Checkbox>
                    </Stack>
                )}

        </Flex>
    );
}

export default SemsterField;
