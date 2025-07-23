import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toast, { BaseToastProps } from 'react-native-toast-message';

type ToastVariant = 'success' | 'error' | 'info' | 'warning';

interface ToastTheme {
	container: {
		backgroundColor: string;
		borderColor: string;
	};
	title: {
		color: string;
	};
	message: {
		color: string;
	};
}

interface ToastConfig {
	richColors?: boolean;
}

interface ToastProps {
	topOffset?: number;
	richColors?: boolean;
}

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

const toastThemes: Record<ToastVariant, ToastTheme> = {
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

const normalTheme: ToastTheme = {
	container: { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' },
	title: { color: '#374151' },
	message: { color: '#6B7280' },
};

interface ToastComponentProps extends BaseToastProps {
	variant: ToastVariant;
	richColors?: boolean;
}

const ToastComponent: React.FC<ToastComponentProps> = ({
	variant,
	text1,
	text2,
	richColors = true,
}) => {
	const theme = richColors ? toastThemes[variant] : normalTheme;

	return (
		<View style={[styles.container, theme.container]}>
			<Text
				style={[styles.title, theme.title]}
				numberOfLines={2}
				ellipsizeMode='tail'
			>
				{text1}
			</Text>

			{text2 && (
				<Text
					style={[styles.message, theme.message]}
					numberOfLines={2}
					ellipsizeMode='tail'
				>
					{text2}
				</Text>
			)}
		</View>
	);
};

const createToastVariant = (variant: ToastVariant, richColors?: boolean) => {
	const ToastVariant = (props: BaseToastProps) => (
		<ToastComponent variant={variant} richColors={richColors} {...props} />
	);
	ToastVariant.displayName = `Toast${
		variant.charAt(0).toUpperCase() + variant.slice(1)
	}`;
	return ToastVariant;
};

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

const createToastFunction =
	(type: ToastVariant): ToastFunction =>
	(text: string, options?: ToastOptions) => {
		Toast.show({
			type,
			text1: text,
			text2: options?.description,
		});
	};

export const createToastConfig = (config?: ToastConfig) => ({
	success: createToastVariant('success', config?.richColors),
	error: createToastVariant('error', config?.richColors),
	info: createToastVariant('info', config?.richColors),
	warning: createToastVariant('warning', config?.richColors),
});

export const toast: ToastAPI = {
	info: createToastFunction('info'),
	success: createToastFunction('success'),
	error: createToastFunction('error'),
	warning: createToastFunction('warning'),
};

const StyledToast: React.FC<ToastProps> = ({
	topOffset,
	richColors = false,
}) => {
	const toastConfig = createToastConfig({ richColors });

	return <Toast config={toastConfig} topOffset={topOffset} />;
};

const styles = StyleSheet.create({
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

export default StyledToast;
