import useCountUp from '../../hooks/shared/useCountUp';

function Counter({target, decimals = 0, prefix = '', suffix = ''}) {
  const {ref, value} = useCountUp(target);
  return (
    <span ref={ref}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}

export default Counter;
