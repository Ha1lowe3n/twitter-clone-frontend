import React, { ReactElement, ReactNode } from "react";
import { Dialog, DialogTitle, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { SingInStyles } from "../pages/SighIn";

interface ModalProps {
    title: string;
    children: ReactNode;
    classes?: ReturnType<typeof SingInStyles>;
    visible: boolean;
    onClose: () => void;
}

export function ModalBlock({
    title,
    children,
    visible = false,
    onClose,
}: ModalProps): ReactElement | null {
    if (!visible) return null;

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                <IconButton
                    onClick={onClose}
                    color="secondary"
                    aria-label="close"
                >
                    <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>
            {children}
        </Dialog>
    );
}
