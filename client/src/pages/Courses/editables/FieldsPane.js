import React, { useEffect } from "react";
import { Flex, Text } from '@chakra-ui/core';
import { OptionsMenu } from "../../../components"
import TextField from './TextField';
import SemesterField from './SemesterField';
import PointsField from './PointsField';
import SaveCancelButtonSet from "./SaveCancelButtonSet";
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

            <Flex justify="space-around" marginTop="20px">
                <SemesterField value={sem} isEditing={isEditing} onChange={onChange} />
                <PointsField value={pts} isEditing={isEditing} onChange={onChange} />
            </Flex>

            {isEditing && <SaveCancelButtonSet isActive={code}/>}

        </Flex >
    );
}

export default FieldsPane;