import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  const theme = useTheme();

  return (
    <TextInput
      ref={inputRef}
      {...rest}
      style={{
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        color: theme.COLORS.WHITE,
        backgroundColor: theme.COLORS.GRAY_700,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.MD,
        borderRadius: 6,
        padding: 16,
      }}
      placeholderTextColor={theme.COLORS.GRAY_300}
    />
  );
}
