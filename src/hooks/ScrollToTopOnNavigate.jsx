import React from "react";

const ScrollToTopOnNavigate = ({ children }) => {
  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      onClick: () => {
        navigateToTop();
        if (child.props.onClick) {
          child.props.onClick();
        }
      },
    })
  );
};

export default ScrollToTopOnNavigate;
