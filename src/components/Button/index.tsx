import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
  icon: keyof typeof Ionicons.glyphMap
}

export function Button({
  title,
  icon,
  isLoading,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity disabled={isLoading} activeOpacity={0.8} {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Ionicons name={icon} />
          <Text>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  )
}
