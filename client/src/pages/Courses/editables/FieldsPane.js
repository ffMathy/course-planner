import React from "react";
import { Flex } from '@chakra-ui/core';
import { OptionsMenu } from "../../../components"
import TextField from './TextField';

const FieldsPane = ({ fields, isEditing, onChange }) => {
    const { code, name, desc, sem } = fields;

    return (
        <Flex>
            <OptionsMenu />

            <TextField required title="code" value={code} isEditing={isEditing} onChange={onChange} />
            {/* <TextField title="name*" isEditing= /> -> required */}
            {/* <TextField title="description" isEditing= /> -> required */}

            <Flex direction="row">
                {/* <PointsField title="code" isEditing= /> -> required */}
                {/* <TextField title="code" isEditing= /> -> required */}
            </Flex>

            {/* Cancel/Confirm buttons */}

        </Flex>
    );
}

export default FieldsPane;