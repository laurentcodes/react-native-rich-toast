import React from 'react';
import { BaseToastProps } from 'react-native-toast-message';
interface ToastConfig {
    richColors?: boolean;
}
interface ToastProps {
    topOffset?: number;
    richColors?: boolean;
    position?: 'top' | 'bottom';
}
export interface ToastOptions {
    description?: string;
}
export type ToastFunction = (text: string, options?: ToastOptions) => void;
export interface ToastAPI {
    info: ToastFunction;
    success: ToastFunction;
    error: ToastFunction;
    warning: ToastFunction;
}
export declare const createToastConfig: (config?: ToastConfig) => {
    success: {
        (props: BaseToastProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    error: {
        (props: BaseToastProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    info: {
        (props: BaseToastProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    warning: {
        (props: BaseToastProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export declare const toast: ToastAPI;
declare const StyledToast: React.FC<ToastProps>;
export default StyledToast;
