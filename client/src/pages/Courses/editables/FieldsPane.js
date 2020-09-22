import React from "react";
import { Flex } from '@chakra-ui/core';

const FieldsPane = ({ fields, isEditing }) => {
    // const { ... } = fields;

    return (
        <Flex>
            {/* ... menu for edit/delete */}

            {/* <TextField title="code" isEditing= /> -> required */}
            {/* <TextField title="name*" isEditing= /> -> required */}
            {/* <TextField title="description" isEditing= /> -> required */}

            <Flex direction="row">
                {/* <PointsField title="code" isEditing= /> -> required */}
                {/* <TextField title="code" isEditing= /> -> required */}
            </Flex>


        </Flex>
    );
}

export default FieldsPane;