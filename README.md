# react native styled toast

a toast component library for react native with rich colors and variants

## installation

```bash
npm install react-native-rich-toast react-native-toast-message
```

## note

this depends on `react-native-toast-message` so make sure it is installed

## usage

### basic Setup

import and use the `Toast` component in your root component:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Toast } from 'react-native-rich-toast';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			{/* your app content */}

			{/* toast component */}
			<Toast />
		</View>
	);
}
```

### showing toasts

use the `toast` API to show different types of toasts:

```tsx
import { toast } from 'react-native-rich-toast';

// success toast
toast.success('operation completed successfully!');

// error toast
toast.error('something went wrong');

// info toast
toast.info('new update available');

// warning toast
toast.warning('please save your work');

// toast with description
toast.success('operation completed successfully!', {
	description: 'the operation successfully completed.',
});
```

## props

### toast component

| prop         | type      | default     | description                                           |
| ------------ | --------- | ----------- | ----------------------------------------------------- |
| `topOffset`  | `number`  | `undefined` | offset from the top of the screen                     |
| `richColors` | `boolean` | `false`     | enable rich color themes for different toast variants |

### toast api

the `toast` object provides methods for different toast types:

- `toast.success(message, options?)` - show success toast
- `toast.error(message, options?)` - show error toast
- `toast.info(message, options?)` - show info toast
- `toast.warning(message, options?)` - show warning toast

### toast options

| option        | type     | description                |
| ------------- | -------- | -------------------------- |
| `description` | `string` | optional secondary message |

## customization

### rich colors

by default, the toast does not use rich colors for different variants. you can enable this by setting `richColors={true}`:

```tsx
<Toast richColors />
```

### color themes

the library includes predefined color themes for each variant:

- **success**: green theme with light green background
- **error**: red theme with light red background
- **info**: blue theme with light blue background
- **warning**: orange theme with light orange background

when `richColors` is disabled, all toasts use a white theme.

## dependencies

- `react-native-toast-message` - required peer dependency
- `react` >= 16.8.0
- `react-native` >= 0.60.0

## license

MIT

# react-native-rich-toast
