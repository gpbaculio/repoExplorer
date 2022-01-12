import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface DynamicViewProps {
  children?: ReactNode;
  flexDirection?: ViewStyle['flexDirection'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  flex?: ViewStyle['flex'];
  padding?: ViewStyle['padding'];
  paddingRight?: ViewStyle['paddingRight'];
  paddingLeft?: ViewStyle['paddingLeft'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingVertical?: ViewStyle['paddingVertical'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  margin?: ViewStyle['margin'];
  marginRight?: ViewStyle['marginRight'];
  marginLeft?: ViewStyle['marginLeft'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  style?: StyleProp<ViewStyle>;
  borderTopWidth?: ViewStyle['borderTopWidth'];
  borderTopColor?: ViewStyle['borderTopColor'];
  borderLeftWidth?: ViewStyle['borderLeftWidth'];
  borderLeftColor?: ViewStyle['borderLeftColor'];
  borderRightWidth?: ViewStyle['borderRightWidth'];
  borderRightColor?: ViewStyle['borderRightColor'];
  borderBottomWidth?: ViewStyle['borderBottomWidth'];
  borderBottomColor?: ViewStyle['borderBottomColor'];
  borderWidth?: ViewStyle['borderWidth'];
  borderColor?: ViewStyle['borderColor'];
  borderRadius?: ViewStyle['borderRadius'];
  borderTopLeftRadius?: ViewStyle['borderTopLeftRadius'];
  borderTopRightRadius?: ViewStyle['borderTopRightRadius'];
  borderBottomLeftRadius?: ViewStyle['borderBottomLeftRadius'];
  borderBottomRightRadius?: ViewStyle['borderBottomRightRadius'];
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  backgroundColor?: ViewStyle['backgroundColor'];
  position?: ViewStyle['position'];
  left?: ViewStyle['left'];
  right?: ViewStyle['right'];
  top?: ViewStyle['top'];
  bottom?: ViewStyle['bottom'];
  display?: ViewStyle['display'];
  testID?: string;
  opacity?: ViewStyle['opacity'];
  zIndex?: ViewStyle['zIndex'];
}

const RView = ({
  children,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  margin,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  style,
  borderTopWidth,
  borderTopColor,
  borderLeftWidth,
  borderLeftColor,
  borderRightWidth,
  borderRightColor,
  borderBottomWidth,
  borderBottomColor,
  borderWidth,
  borderColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  width,
  backgroundColor,
  height,
  position,
  left,
  right,
  top,
  bottom,
  display,
  testID,
  opacity,
  zIndex,
}: DynamicViewProps) => (
  <View
    testID={testID}
    style={[
      !!flex && {flex},
      !!flexDirection && {flexDirection},
      !!justifyContent && {justifyContent},
      !!alignItems && {alignItems},
      !!padding && {padding},
      !!paddingTop && {paddingTop},
      !!paddingRight && {paddingRight},
      !!paddingBottom && {paddingBottom},
      !!paddingLeft && {paddingLeft},
      !!paddingVertical && {paddingVertical},
      !!paddingHorizontal && {paddingHorizontal},
      !!margin && {margin},
      !!marginTop && {marginTop},
      !!marginRight && {marginRight},
      !!marginBottom && {marginBottom},
      !!marginLeft && {marginLeft},
      !!marginVertical && {marginVertical},
      !!marginHorizontal && {marginHorizontal},
      style && style,
      !!borderTopWidth && {borderTopWidth},
      !!borderTopColor && {borderTopColor},
      !!borderLeftWidth && {borderLeftWidth},
      !!borderLeftColor && {borderLeftColor},
      !!borderRightWidth && {borderRightWidth},
      !!borderRightColor && {borderRightColor},
      !!borderBottomWidth && {borderBottomWidth},
      !!borderBottomColor && {borderBottomColor},
      !!borderWidth && {borderWidth},
      !!borderColor && {borderColor},
      !!borderRadius && {borderRadius},
      !!borderTopLeftRadius && {borderTopLeftRadius},
      !!borderTopRightRadius && {borderTopRightRadius},
      !!borderBottomLeftRadius && {borderBottomLeftRadius},
      !!borderBottomRightRadius && {borderBottomRightRadius},
      !!width && {width},
      !!backgroundColor && {backgroundColor},
      !!height && {height},
      !!position && {position},
      !!left && {left},
      !!right && {right},
      !!top && {top},
      !!bottom && {bottom},
      !!display && {display},
      !!opacity && {opacity},
      !!zIndex && {zIndex},
    ]}>
    {children}
  </View>
);

export default RView;
