import React, { useEffect } from 'react';
import cn from 'classnames';

type Props = {
  errorMessage: string | null;
  clearError: () => void;
};

export const ErrorNotification: React.FC<Props> = props => {
  const { errorMessage, clearError } = props;

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        clearError();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  if (errorMessage === '') {
    return null;
  }

  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !errorMessage,
      })}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={clearError}
      />
      {`${errorMessage}`}
    </div>
  );
};
