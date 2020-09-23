import React from "react";
import { Box, Text, FormControl, FormLabel, Input, Divider } from "@chakra-ui/core";
import { colors as c } from "../../../colors";

const TextField = ({ isRequired = false, title, value, isEditing, onChange }) => {

    return (

        !isEditing
            ? (
                <Box>
                    <Text color={c.darkBlue} fontWeight="bold">{title[0].toUpperCase() + title.substring(1)}</Text>
                    <Text>
                        {value}
                    </Text>
                    <Divider borderColor={c.whiteGrey} />
                </Box>
            ) : (
                <FormControl isRequired={isRequired}>
                    <FormLabel color={c.darkBlue} fontWeight="bold">{title[0].toUpperCase() + title.substring(1)}</FormLabel>
                    <Input overflowWrap="break-word" placeholder={title} value={value} onChange={onChange} />
                </FormControl>
            )
    );
}

export default TextField;
