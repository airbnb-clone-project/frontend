'use client';

import { MswProvider } from '@/components/MswProvider';
import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { useState } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MswProvider />
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default Providers;
