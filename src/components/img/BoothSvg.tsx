import { CSSProperties } from 'react';

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
}

/**
 * NOTE: ListSvg
 * => リスト表示 の SVG_Icon
 */
const ListSvg = (props: PropsType) => {
  return (
    <svg 
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style ? props.style : undefined}
    >
    <g mask='' id="boothlogo" data-name="boothlogo">
        <path d="M0 1024H1024V0H0V1024Z" fill={props.color ? props.color : '#FC4D50'} />
        <path d="M773.828 438.341V389.068L650.744 192H608.227L541.093 353.238L475.077 214.446L438.138 214.382L326.272 478.653V227.833H250.172V250.007H192V327.26H250.172V550.306C250.172 570.098 266.227 586.141 286.004 586.141H324.033V832L401.683 831.946C401.683 831.946 401.695 720.762 401.695 720.644C401.695 658.964 455.026 608.963 520.963 608.563C521.198 608.563 521.445 608.535 521.707 608.535H521.744H521.786H521.875C629.722 608.612 717.139 690.28 717.139 790.983V832H773.828V611.427H832V489.487L773.828 438.341Z" fill='#FFFFFF'/>
    </g>
</svg>

  );
};

export default ListSvg;