import React, {
 Suspense, lazy, ComponentType, ComponentProps,
} from 'react';
import Loader from 'components/layout/Loader/Loader';

export default function<T extends ComponentType<any>> (path: () => Promise<{ default: T }>) {
  const Component = lazy(path);

  return function (props: ComponentProps<T>) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
