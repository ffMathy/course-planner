import React from "react";
import {
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
} from "@chakra-ui/core";

const ConfirmationDialog = ({ isOpen, onClose, confirm, itemType, item, action, navigateTo }) => {
    const cancelRef = React.useRef();

    return (
        <>
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {action} {itemType}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure you want to {action && action.toLowerCase()} {item.name || "this"}? You can't undo this action
                        afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            variantColor="red"
                            onClick={() => {
                                switch (itemType) {
                                    case "Course":
                                        confirm(item.courseCode);
                                        break;
                                    case "Programme":
                                        confirm();
                                        break;
                                    case "Student":
                                        confirm(item.upi);
                                        break;
                                    case "Regulation":
                                        confirm(item);
                                        break;
                                    default:
                                        confirm(item);
                                        break;
                                }
                                onClose();
                            }}
                            ml={3}
                        >
                            {action}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default ConfirmationDialog;
