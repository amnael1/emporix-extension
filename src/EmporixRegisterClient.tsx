import {registerCallback, registerClient } from "md-ext/lib";
import {EmporixState} from "./emporix.model.ts";
import {ReactNode, useContext } from "react";
import {EmporixContext} from "./EmporixProvider.tsx";
import {Col, Container, Row } from "react-bootstrap";

interface AppContext {
    value: EmporixState
}

export const EmporixRegisterClient = ({ children }: {children: ReactNode}) => {
    const {state, setState} = useContext(EmporixContext);

    registerClient()
    registerCallback('callbackId', (ctx) => {
        const appContext: AppContext = ctx as AppContext
        setState({
            ...appContext.value,
            isLoggedIn: true,
        })
    })

    return (
        <>
            {state.isLoggedIn && (
                <>
                    <Container>
                        <Row>
                            <Col>{children}</Col>
                        </Row>
                    </Container>
                </>
            )}
            {!state.isLoggedIn && (
                <p>Not logged in</p>
            )}
        </>
    );
};
