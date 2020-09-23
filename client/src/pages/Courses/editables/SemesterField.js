import React from "react";
import { Flex, Text, Stack, Checkbox } from "@chakra-ui/core";
import { colors as c } from "../../../colors";

const temp = ["monkey", "business", "S2"];

const SemsterField = ({ value, isEditing, onChange }) => {

    return (
        <Flex direction="column">
            <Text color={c.darkBlue} fontWeight="bold">Semester:</Text>

            {!isEditing
                ? (
                    <Text textAlign="center" fontSize="large">{temp.join(", ")}</Text>
                ) : (
                    <Stack spacing={10} isInline>
                        <Checkbox borderColor={c.lightBlue} isChecked={temp.includes("S1")}>
                            S1
                        </Checkbox>
                        <Checkbox borderColor={c.lightBlue} isChecked={temp.includes("S2")}>
                            S2
                        </Checkbox>
                        <Checkbox borderColor={c.lightBlue} isChecked={temp.includes("SS")}>
                            SS
                        </Checkbox>
                    </Stack>
                )}

        </Flex>
    );
}

export default SemsterField;
