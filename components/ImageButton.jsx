import { View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

export const ImageButton = ({ style }) => {
  return (
    <View style={style}>
      <Svg width="25" height="25" viewBox="0 0 25 25">
        <Circle
          cx="12.500000"
          cy="12.500000"
          r="12.000000"
          fill="#FFFFFF"
          stroke="#FF6C00"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
        />
        <Path
          d="M13 6L12 6L12 12L6 12L6 13L12 13L12 19L13 19L13 13L19 13L19 12L13 12L13 6Z"
          clip-rule="evenodd"
          fill="#FF6C00"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </Svg>
    </View>
  );
};
