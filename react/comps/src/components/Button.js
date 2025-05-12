import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';



export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...otherProps
}) {
  const classes = twMerge(classnames('flex items-center px-3 py-1.5 border', {
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-800 text-white': secondary,
    'border-green-600 bg-green-500 text-white': success,
    'border-yellow-500 bg-yellow-400 text-white': warning,
    'border-red-600 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-600': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-600': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-600': outline && danger
  }, className));
  return <button className={classes} {...otherProps}>{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger);

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true');
    }


  }
}