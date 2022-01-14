import React from "react";
import SVG from "react-inlinesvg";

type Props = {
  filename: string;
  className?: string;
};

const CIcon: React.FC<Props> = ({ filename, ...rest }) => {
  return <SVG {...rest} src={`/svg/${filename}.svg`} />;
};

export default CIcon;
