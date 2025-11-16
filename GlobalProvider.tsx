import {type ReactNode} from "react";

type Props = {
    children: ReactNode;
    providers: Array<React.JSXElementConstructor<{ children: ReactNode }>>}

export const GlobalProvider = ({children,providers}: Props) => {
    return providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
    }, children);
};