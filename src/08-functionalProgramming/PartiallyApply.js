const PartiallyApply = (Component, partialProps) => {
  return (props) => {
   return <Component {...partialProps} {...props} />;
  };
};

const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

const WarningButton = PartiallyApply(Button, { color: 'yellow' });
const InfoButton = PartiallyApply(Button, { color: 'blue', size: 'large' });

export { WarningButton, InfoButton };
