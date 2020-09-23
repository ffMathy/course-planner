import React, { useEffect } from "react";
import { Flex, Text } from '@chakra-ui/core';
import { OptionsMenu } from "../../../components"
import TextField from './TextField';
import SemesterField from './SemesterField';
import PointsField from './PointsField';
import SaveCancelButtonSet from "./SaveCancelButtonSet";
import { colors as c } from "../../../colors";

const FieldsPane = ({ code, name, desc, sem, pts, isNew, isEditing, onEdit, onDelete, onChange, onCancel, onSave }) => {

    return (
        <Flex direction="column" margin="5px" padding="10px" borderRadius="5px" bg={c.lightGrey} boxShadow="md">
            {isNew
                ? (
                    <Flex justifyContent="center">
                        <Text fontSize="50px" fontWeight="bold" color={c.darkBlue}>Create a new course</Text>
                    </Flex>
                ) : (
                    <Flex justifyContent="flex-end">
                        <OptionsMenu item={{}} itemType="Course" />
                    </Flex>
                )
            }

            <TextField isRequired name="code" title="code" value={code} isEditing={isEditing} onChange={onChange} />
            <TextField name="name" title="name" value={name} isEditing={isEditing} onChange={onChange} />
            <TextField name="desc" title="description" value={desc} isEditing={isEditing} onChange={onChange} />

            <Flex justify="space-around" marginTop="15px">
                <SemesterField value={sem} isEditing={isEditing} onChange={onChange} />
                <PointsField value={pts} isEditing={isEditing} onChange={onChange} />
            </Flex>

            { isEditing && <SaveCancelButtonSet isActive={code} onCancel={onCancel} onSave={onSave} />}

        </Flex >
    );
}

export default FieldsPane;