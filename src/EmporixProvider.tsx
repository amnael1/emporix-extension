import { createContext, ReactNode, useState, useMemo } from "react";
import { EmporixState } from "./emporix.model.ts";

interface EmporixContextProps {
    state: EmporixState;
    setState: (newState: EmporixState) => void;
}

const defaultState: EmporixState = {
    isLoggedIn: false,
};

// eslint-disable-next-line react-refresh/only-export-components
export const EmporixContext = createContext<EmporixContextProps>({
    state: defaultState,
    setState: () => {},
});

export default function EmporixProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<EmporixState>(defaultState);

    const value = useMemo(() => ({ state, setState }), [state]);

    return (
        <EmporixContext.Provider value={value}>
            {children}
        </EmporixContext.Provider>
    );
}
