import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Counter = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  return (
    <div className="counter d-flex align-items-center gap-2">
      <p className="mb-0">{t('counter.label', { count })}</p>
      <div className="btn-group">
        <button 
          className="btn btn-outline-primary"
          onClick={handleDecrement}
          aria-label={t('counter.decrease')}
        >
          <i className="bi bi-dash"></i>
        </button>
        <span className="btn btn-outline-primary disabled">
          {count}
        </span>
        <button 
          className="btn btn-outline-primary"
          onClick={handleIncrement}
          aria-label={t('counter.increase')}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Counter;