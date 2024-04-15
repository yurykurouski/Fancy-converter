import React, { LegacyRef, NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { TSVGIcon } from 'types';
import { useSnapshot } from 'valtio';

export const DarkIconMoon: NamedExoticComponent<TSVGIcon> = React.forwardRef(
  ({ size, style, color }, ref: LegacyRef<Svg>) => {
    const { colorScheme } = useSnapshot(colorSchemeStore);

    return (
      <Svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 35 35"
        style={style}>
        <Path
          d="M24.3049 4.12491C25.754 5.57399 26.8572 7.21242 27.6147 9.04023C28.3722 10.868 28.7838 12.7288 28.8497 14.6224C28.9156 16.5161 28.6233 18.3563 27.9729 20.1429C27.3224 21.9295 26.3056 23.5145 24.9224 24.8977C23.5392 26.2809 21.9502 27.3018 20.1553 27.9605C18.3604 28.6191 16.5161 28.9155 14.6225 28.8497C12.7288 28.7838 10.8681 28.3721 9.04025 27.6147C7.21245 26.8572 5.57401 25.7539 4.12494 24.3049C3.351 23.5309 2.7088 22.7241 2.19833 21.8843C1.68786 21.0445 1.25973 20.1717 0.913929 19.2661C3.4498 19.6942 5.96921 19.5789 8.47215 18.9203C10.9751 18.2616 13.1734 16.9854 15.0671 15.0917C16.9772 13.1816 18.2657 10.9709 18.9326 8.45978C19.5995 5.9486 19.7107 3.43331 19.2661 0.913904C20.1717 1.25971 21.0445 1.68784 21.8843 2.19831C22.7241 2.70878 23.531 3.35098 24.3049 4.12491Z"
          fill={color ?? THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
