import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  whiteLightness = 'whiteLightness',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayEC = 'grayEC',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

interface ITextProps {
  As?: 'li' | 'a' | 'div' | 'span' | 'h1' | 'h2' | 'h3'
  children?: React.ReactNode,
  size: Tsizes,
  mobileSize?: Tsizes,
  tabletSize?: Tsizes,
  desktopSize?: Tsizes,
  color?: EColor

}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    color = EColor.black,
    size,
    mobileSize,
    tabletSize,
    desktopSize
  } = props
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
  )
  return (
    <As className={classes}>
      {children}
    </As>

  );
}
