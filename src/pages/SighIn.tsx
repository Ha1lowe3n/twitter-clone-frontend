import React from "react";

import { Button, makeStyles, Typography } from "@material-ui/core";
import {
    Twitter,
    Search,
    PeopleOutline,
    MailOutline,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
}));

function SighIn() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <Twitter className={classes.blueSideBigIcon} color="primary" />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <Search className={classes.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutline
                                className={classes.blueSideListInfoIcon}
                            />
                            Узнайте, о чем говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MailOutline
                                className={classes.blueSideListInfoIcon}
                            />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>

            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <Twitter
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
                        style={{ marginBottom: 15 }}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Зарегистрироваться
                    </Button>
                    <Button variant="outlined" color="primary" fullWidth>
                        Войти
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default SighIn;
