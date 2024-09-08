'use client';

import { useEffect } from 'react';

export const MswProvider = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window === 'undefined') {
        (async () => {
          const { server } = await import('../mock/server');
          server.listen();
        })();
      } else {
        (async () => {
          const { worker } = await import('../mock/browser');
          worker.start();
        })();
      }
    }
  });

  return null;
};
