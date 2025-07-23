import React from 'react';
import { BaseToastProps } from 'react-native-toast-message';
interface ToastConfig {
    richColors?: boolean;
}
interface ToastProps {
    topOffset?: number;
    richColors?: boolean;
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
        (props: BaseToastProps): React.JSX.Element;
        displayName: string;
    };
    error: {
        (props: BaseToastProps): React.JSX.Element;
        displayName: string;
    };
    info: {
        (props: BaseToastProps): React.JSX.Element;
        displayName: string;
    };
    warning: {
        (props: BaseToastProps): React.JSX.Element;
        displayName: string;
    };
};
export declare const toast: ToastAPI;
declare const StyledToast: React.FC<ToastProps>;
export default StyledToast;
