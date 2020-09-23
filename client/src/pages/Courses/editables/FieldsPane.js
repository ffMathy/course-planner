import React, { useEffect } from "react";
import { Flex } from '@chakra-ui/core';
import { OptionsMenu } from "../../../components"
import TextField from './TextField';
import { colors as c } from "../../../colors";

const FieldsPane = ({ code, name, desc, sem, pts, isEditing, onEdit, onDelete, onChange }) => {

    return (
        <Flex direction="column" margin="5px" padding="10px" borderRadius="5px" bg={c.lightGrey} boxShadow="md">
            <Flex justifyContent="flex-end">
                <OptionsMenu item={{}} itemType="Course" />
            </Flex>

            <TextField isRequired title="code" value={code} isEditing={isEditing} onChange={onChange} />
            <TextField title="name" value={name} isEditing={isEditing} onChange={onChange} />
            <TextField title="description" value={desc} isEditing={isEditing} onChange={onChange} />

            <Flex direction="row">
                {/* <PointsField title="code" isEditing= /> -> required */}
                {/* <TextField title="code" isEditing= /> -> required */}
            </Flex>

            {/* Cancel/Confirm buttons */}

        </Flex >
    );
}

export default FieldsPane;