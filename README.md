# React Native Styled Toast

A toast component library for React Native with rich colors and variants.

## Installation

```bash
npm install react-native-rich-toast react-native-toast-message
```

## Setup

First, install the peer dependency `react-native-toast-message` and follow its setup instructions.

## Usage

### Basic Setup

Import and use the `Toast` component in your root component:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Toast } from 'react-native-rich-toast';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			{/* Your app content */}

			{/* Toast component - place at the bottom of your component tree */}
			<Toast topOffset={50} richColors />
		</View>
	);
}
```

### Showing Toasts

Use the `toast` API to show different types of toasts:

```tsx
import { toast } from 'react-native-rich-toast';

// Success toast
toast.success('Operation completed successfully!');

// Error toast
toast.error('Something went wrong', {
	description: 'Please try again later',
});

// Info toast
toast.info('New update available');

// Warning toast
toast.warning('Please save your work', {
	description: 'Auto-save will happen in 5 minutes',
});
```

## Props

### Toast Component

| Prop         | Type      | Default     | Description                                           |
| ------------ | --------- | ----------- | ----------------------------------------------------- |
| `topOffset`  | `number`  | `undefined` | Offset from the top of the screen                     |
| `richColors` | `boolean` | `true`      | Enable rich color themes for different toast variants |

### Toast API

The `toast` object provides methods for different toast types:

- `toast.success(message, options?)` - Show success toast
- `toast.error(message, options?)` - Show error toast
- `toast.info(message, options?)` - Show info toast
- `toast.warning(message, options?)` - Show warning toast

### Toast Options

| Option        | Type     | Description                |
| ------------- | -------- | -------------------------- |
| `description` | `string` | Optional secondary message |

## Customization

### Rich Colors

By default, the toast does not use rich colors for different variants. You can enable this by setting `richColors={true}`:

```tsx
<Toast topOffset={50} richColors />
```

### Color Themes

The library includes predefined color themes for each variant:

- **Success**: Green theme with light green background
- **Error**: Red theme with light red background
- **Info**: Blue theme with light blue background
- **Warning**: Orange theme with light orange background

When `richColors` is disabled, all toasts use a neutral gray theme.

## Dependencies

- `react-native-toast-message` - Required peer dependency
- `react` >= 16.8.0
- `react-native` >= 0.60.0

## License

MIT
# react-native-rich-toast
