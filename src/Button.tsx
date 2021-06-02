import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
