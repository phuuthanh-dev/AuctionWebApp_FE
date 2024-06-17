import React from 'react';

interface PaymentMethodProps {
  method: string | undefined;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ method }) => {
  const defaultView = <></>;

  const currentView = {
    PAY_AT_COUNTER: <span className="fw-bold" >
      Thanh toán tại quầy
    </span>,
    BANKING: <span className="fw-bold" >
      Chuyển khoản
    </span>
  }[method];

  return currentView || defaultView;
}
