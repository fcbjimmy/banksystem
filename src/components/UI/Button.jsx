import css from './Button.module.css';

const Button = (props) => {
  const { children, type, icon, ...rest } = props;

  return (
    <button type={type} className={`${css.button} ${icon ? css.outline : css.default}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
