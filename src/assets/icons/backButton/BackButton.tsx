import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const BackButtonSVG = (props: SvgProps) => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13 1 7l6-6"
    />
  </Svg>
)
