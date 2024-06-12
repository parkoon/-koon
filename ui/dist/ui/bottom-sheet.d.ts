import React from 'react';
type BottomSheetProps = {
    className?: string;
    children?: React.ReactNode;
    open?: boolean;
    onClose?(): void;
};
declare const BottomSheet: ({ className, open, children, onClose }: BottomSheetProps) => React.JSX.Element;
export default BottomSheet;
