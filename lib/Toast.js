"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = exports.createToastConfig = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_toast_message_1 = __importDefault(require("react-native-toast-message"));
const textSizes = {
    xs: 12,
    sm: 14,
    base: 16,
};
const textStyles = {
    text: {
        color: '#FFFFFF',
        fontSize: textSizes.base,
    },
    smallText: {
        color: '#FFFFFF',
        fontSize: textSizes.sm,
    },
};
const toastThemes = {
    success: {
        container: { backgroundColor: '#F0FDF4', borderColor: '#22C55E' },
        title: { color: '#15803D' },
        message: { color: '#166534' },
    },
    error: {
        container: { backgroundColor: '#FEF2F2', borderColor: '#EF4444' },
        title: { color: '#DC2626' },
        message: { color: '#B91C1C' },
    },
    info: {
        container: { backgroundColor: '#EFF6FF', borderColor: '#3B82F6' },
        title: { color: '#2563EB' },
        message: { color: '#1D4ED8' },
    },
    warning: {
        container: { backgroundColor: '#FFFBEB', borderColor: '#F59E0B' },
        title: { color: '#D97706' },
        message: { color: '#B45309' },
    },
};
const normalTheme = {
    container: { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' },
    title: { color: '#374151' },
    message: { color: '#6B7280' },
};
const ToastComponent = ({ variant, text1, text2, richColors = true, }) => {
    const theme = richColors ? toastThemes[variant] : normalTheme;
    return (<react_native_1.View style={[styles.container, theme.container]}>
			<react_native_1.Text style={[styles.title, theme.title]} numberOfLines={2} ellipsizeMode='tail'>
				{text1}
			</react_native_1.Text>

			{text2 && (<react_native_1.Text style={[styles.message, theme.message]} numberOfLines={2} ellipsizeMode='tail'>
					{text2}
				</react_native_1.Text>)}
		</react_native_1.View>);
};
const createToastVariant = (variant, richColors) => {
    const ToastVariant = (props) => (<ToastComponent variant={variant} richColors={richColors} {...props}/>);
    ToastVariant.displayName = `Toast${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    return ToastVariant;
};
const createToastFunction = (type) => (text, options) => {
    react_native_toast_message_1.default.show({
        type,
        text1: text,
        text2: options?.description,
    });
};
const createToastConfig = (config) => ({
    success: createToastVariant('success', config?.richColors),
    error: createToastVariant('error', config?.richColors),
    info: createToastVariant('info', config?.richColors),
    warning: createToastVariant('warning', config?.richColors),
});
exports.createToastConfig = createToastConfig;
exports.toast = {
    info: createToastFunction('info'),
    success: createToastFunction('success'),
    error: createToastFunction('error'),
    warning: createToastFunction('warning'),
};
const StyledToast = ({ topOffset, richColors = false, }) => {
    const toastConfig = (0, exports.createToastConfig)({ richColors });
    return <react_native_toast_message_1.default config={toastConfig} topOffset={topOffset}/>;
};
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 70,
        maxHeight: 120,
        width: '90%',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 15,
        justifyContent: 'center',
        gap: 5,
        borderWidth: 1,
    },
    title: {
        ...textStyles.text,
        fontWeight: 'bold',
        fontSize: textSizes.sm,
        lineHeight: 20,
        flexShrink: 1,
    },
    message: {
        ...textStyles.smallText,
        fontSize: textSizes.xs,
        lineHeight: 16,
        flexShrink: 1,
    },
});
exports.default = StyledToast;
