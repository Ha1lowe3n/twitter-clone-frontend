import React, { useState } from "react";

import {
    Button,
    FormControl,
    FormGroup,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import { ModalBlock } from "../components";

export const SingInStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: "100vh",
    },
    blueSide: {
        position: "relative",
        backgroundColor: "#71C9F8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 50%",
        overflow: "hidden",
    },
    blueSideListInfo: {
        position: "relative",
        width: 380,
        listStyle: "none",
        padding: 0,
        margin: 0,
        "& h6": {
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 10,
    },
    blueSideListInfoItem: {
        marginBottom: 20,
    },
    blueSideBigIcon: {
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "250%",
        height: "250%",
    },
    loginSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 50%",
    },
    button: {
        fontWeight: 700,
    },
    lightBulb: {
        verticalAlign: "middle",
        marginRight: theme.spacing(1),
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    },
}));

function SighIn() {
    const classes = SingInStyles();
    const [visibleModal, setVisibleModal] = useState<"signIn" | "signUp">();

    const handleClickOpenSighIn = (): void => setVisibleModal("signIn");
    const handleClickOpenSighUp = (): void => setVisibleModal("signUp");
    const handleCloseModal = (): void => setVisibleModal(undefined);

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon
                    className={classes.blueSideBigIcon}
                    color="primary"
                />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon
                                className={classes.blueSideListInfoIcon}
                            />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon
                                className={classes.blueSideListInfoIcon}
                            />
                            Узнайте, о чем говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MailOutlineIcon
                                className={classes.blueSideListInfoIcon}
                            />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>

            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon
                        className={classes.loginSideTwitterIcon}
                        color="primary"
                    />
                    <Typography
                        variant={"h4"}
                        className={classes.loginSideTitle}
                    >
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br />
                    <Button
                        onClick={handleClickOpenSighUp}
                        style={{ marginBottom: 15 }}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Зарегистрироваться
                    </Button>
                    <Button
                        onClick={handleClickOpenSighIn}
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >
                        Войти
                    </Button>

                    {/* modal SighIn */}
                    <ModalBlock
                        visible={visibleModal === "signIn"}
                        onClose={handleCloseModal}
                        title="Войти в аккаунт"
                    >
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup
                                style={{ margin: 20 }}
                                aria-label="position"
                                row
                            >
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button
                                    style={{ marginBottom: 5 }}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>

                    {/* modal SighUp */}
                    <ModalBlock
                        visible={visibleModal === "signUp"}
                        onClose={handleCloseModal}
                        title="Регистрация"
                    >
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup
                                style={{ margin: 20 }}
                                aria-label="position"
                                row
                            >
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button
                                    style={{ marginBottom: 5 }}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
}

export default SighIn;
