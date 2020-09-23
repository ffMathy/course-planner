import React from "react";
import { Box, Text, FormControl, FormLabel, Input, Divider } from "@chakra-ui/core";
import { colors as c } from "../../../colors";

const TextField = ({ isRequired = false, title, value, isEditing, onChange }) => {

    return (
        <FormControl isRequired={isRequired}>
            <FormLabel>{title[0].toUpperCase() + title.substring(1)}</FormLabel>

            {!isEditing
                ? (
                    <Box>
                        <Text>
                            {value}
                        </Text>
                        <Divider borderColor={c.whiteGrey} />
                    </Box>
                ) : (
                    <Input overflowWrap="break-word" placeholder={title} value={value} onChange={onChange} />
                )}
        </FormControl>


    );
}

export default TextField;
