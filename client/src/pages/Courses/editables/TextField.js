import React from "react";
import { Flex, Text, Input } from "@chakra-ui/core";

const TextField = ({ required = false, title, help = "", value, isEditing, onChange }) => {

    return (
        <Flex direction="row">
            <Text>{title[0].toUpperCase() + title.substring(1)}{required && "*"}</Text>

            {!isEditing
                ?
                <Text>
                    {value}
                </Text>
                :
                <Input overflowWrap="break-word">

                </Input>
            }
        </Flex>
    );
}

export default TextField;
