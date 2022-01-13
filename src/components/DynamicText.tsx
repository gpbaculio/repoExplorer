import React, {ReactNode} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

interface RTextProps {
  children: ReactNode;
  flex?: TextStyle['flex'];
  padding?: TextStyle['padding'];
  paddingRight?: TextStyle['paddingRight'];
  paddingLeft?: TextStyle['paddingLeft'];
  paddingTop?: TextStyle['paddingTop'];
  paddingBottom?: TextStyle['paddingBottom'];
  paddingVertical?: TextStyle['paddingVertical'];
  paddingHorizontal?: TextStyle['paddingHorizontal'];
  margin?: TextStyle['margin'];
  marginRight?: TextStyle['marginRight'];
  marginLeft?: TextStyle['marginLeft'];
  marginTop?: TextStyle['marginTop'];
  marginBottom?: TextStyle['marginBottom'];
  marginVertical?: TextStyle['marginVertical'];
  marginHorizontal?: TextStyle['marginHorizontal'];
  fontFamily?: TextStyle['fontFamily'];
  lineHeight?: TextStyle['lineHeight'];
  fontSize?: TextStyle['fontSize'];
  color: TextStyle['color'];
  style?: StyleProp<TextStyle>;
  testID?: string;
  fontWeight?: TextStyle['fontWeight'];
}

const DynamicText = ({
  children,
  flex,
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
  fontFamily,
  lineHeight,
  fontSize,
  color,
  style,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  testID,
  fontWeight,
}: RTextProps) => (
  <Text
    testID={testID}
    style={[
      !!fontWeight && {fontWeight},
      !!flex && {flex},
      !!padding && {padding},
      !!paddingTop && {paddingTop},
      !!paddingRight && {paddingRight},
      !!paddingBottom && {paddingBottom},
      !!paddingLeft && {paddingLeft},
      !!margin && {margin},
      !!marginTop && {marginTop},
      !!marginRight && {marginRight},
      !!marginBottom && {marginBottom},
      !!marginLeft && {marginLeft},
      !!fontFamily && {fontFamily},
      {lineHeight, fontSize, color},
      style && style,
      !!paddingVertical && {paddingVertical},
      !!paddingHorizontal && {paddingHorizontal},
      !!marginVertical && {marginVertical},
      !!marginHorizontal && {marginHorizontal},
    ]}>
    {children}
  </Text>
);

export default DynamicText;
