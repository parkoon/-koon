import React from 'react';
type ScreenDrawerProps = {
    className?: string;
    children?: React.ReactNode;
    title?: string;
};
type ScreenDrawerProviderProps = {
    children: React.ReactNode;
};
type ScreenDrawerContextType = {
    opened: boolean;
    open: () => void;
    close: () => void;
};
export declare const ScreenDrawerProvider: ({ children }: ScreenDrawerProviderProps) => React.JSX.Element;
export declare const useScreenDrawer: () => ScreenDrawerContextType;
declare const ScreenDrawer: ({ className, title, children }: ScreenDrawerProps) => React.JSX.Element;
export default ScreenDrawer;
