import React from 'react';
import { ButtonProps } from './button';
type IconButtonProps = {
    icon: React.ReactNode;
} & Omit<ButtonProps, 'children' | 'size' | 'danger'>;
declare const IconButton: ({ icon, variant, loading, ...props }: IconButtonProps) => React.JSX.Element;
export default IconButton;
