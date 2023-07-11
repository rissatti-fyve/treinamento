import * as React from 'react'
import Svg, { SvgProps, Circle, Path } from 'react-native-svg'
export const BackSVG = (props: SvgProps) => (
  <Svg width={27} height={27} fill="none" {...props}>
    <Circle cx={13.5} cy={13.5} r={13.5} fill="#fff" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 12-5.5 5L8 12"
    />
  </Svg>
)
