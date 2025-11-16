import {createContext, type ReactNode, useContext, useState} from "react";

type ContextState<T> = [value: T, setValue: (newValue: T) => void];

type ProviderProps<T> = {
    children: ReactNode;
    initialValue?: T;
}

export function createGenericContext<T>(value: T = {} as T) {
    const GenericContext = createContext<ContextState<T>>([value, () => {}]);

    const Provider = ({ children, initialValue=value }: ProviderProps<T>) => {
        const contextState = useState<T>(initialValue);
        return (
            <GenericContext.Provider value={contextState}>
                {children}
            </GenericContext.Provider>
        );
    };

    const useGenericContext = () => {
        return useContext(GenericContext);
    };

    return [Provider, useGenericContext] as const;
}

