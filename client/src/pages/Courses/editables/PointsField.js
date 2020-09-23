import React from "react";
import { Flex, Box, Text, Select } from "@chakra-ui/core";

const points = [15, 20, 30];

const PointsField = ({ value, isEditing, onChange }) => {

    return (
        <Flex direction="column">
            <Text fontWeight="bold">Points:</Text>

            {!isEditing
                ? (
                    <Text textAlign="center" fontSize="large">{value}</Text>
                ) : (
                    <Select value={value} onChange={onChange}>
                        {points.map((val, i) => (
                            <option value={val} key={i}>
                                {val} points
                            </option>
                        ))}
                    </Select>
                )}
        </Flex>
    );
}

export default PointsField;
