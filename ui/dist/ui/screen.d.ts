import React from 'react';
export declare const DEFAULT_SCREEN_WIDTH = 440;
export declare const DEFAULT_SCREEN_HEADER_HEIGHT = 56;
type ScreenProps = {
    width?: number;
    children: React.ReactNode;
    className?: string;
};
declare const Screen: {
    ({ width, className, children }: ScreenProps): React.JSX.Element;
    Header: ({ title, extra, action, classNames, bordered }: ScreenHeaderProps) => React.JSX.Element;
    Back: ({ onBack }: ScreenBackProps) => React.JSX.Element;
};
type ScreenHeaderProps = {
    action?: React.ReactNode;
    title?: string;
    extra?: React.ReactNode;
    bordered?: boolean;
    classNames?: {
        root?: string;
        title?: string;
    };
};
type ScreenBackProps = {
    onBack?(): void;
};
export default Screen;
