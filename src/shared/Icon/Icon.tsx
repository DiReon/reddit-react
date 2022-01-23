import React from 'react';
import styles from './icon.css';
import {saveIcon} from '../Icons/save-icon';
import {blockIcon, commentIcon, shareIcon, warningIcon} from '../Icons';
export enum EIcon {
  block = 'BlockIcon',
  share = 'ShareIcon',
  save = 'SaveIcon',
  comment = 'CommentIcon',
  warning = 'WarningIcon',
}

export const IconMap: Map<EIcon, string> = new Map([
  [EIcon.block, blockIcon],
  [EIcon.share, shareIcon],
  [EIcon.save, saveIcon],
  [EIcon.comment, commentIcon],
  [EIcon.warning, warningIcon],
])

interface IIconProps {
  name: EIcon;
  size?: number;
}

export function Icon({name, size = 16}: IIconProps) {
  const svg = IconMap.get(name) || '';
  if (!svg) {
    return null;
  }
  const element = document.createElement('div');
  element.innerHTML = svg;
  const svgTempElement = element.firstChild as SVGElement;
  svgTempElement.setAttribute('width', size.toString());
  svgTempElement.setAttribute('height', size.toString());
  const svgInnerHtml = element.innerHTML;

  const svgElement = <span className={styles.container} dangerouslySetInnerHTML={{__html: svgInnerHtml}}/>
  console.log(svgElement.props);
  return (
    svgElement
  )
}
