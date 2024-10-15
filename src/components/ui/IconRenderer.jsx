import React from "react";
import { getIconComponent } from "../../utils/iconMap";

const IconRenderer = ({ iconName, iconPath, className, alt }) => {
  const IconComponent = getIconComponent(iconName);

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  if (iconPath) {
    return (
      <img
        src={iconPath}
        alt={alt}
        className={`size-6 object-contain ${className}`}
      />
    );
  }

  return null;
};

export default IconRenderer;
