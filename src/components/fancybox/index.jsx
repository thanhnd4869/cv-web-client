import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import React, { useEffect } from 'react';

const FancyboxComponent = (props) => {
  const delegate = props.delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = props.options || {};

    Fancybox.bind(delegate, opts);

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
};

export default FancyboxComponent;
