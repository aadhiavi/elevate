// Custom hook for API calls

import { useState, useCallback } from 'react';
import type { IApiError } from '../types';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: IApiError | null;
}

export const useApi = <T,>(
  apiFunction: () => Promise<T>
): UseApiState<T> & { fetch: () => Promise<void> } => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetch = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const result = await apiFunction();
      setState({ data: result, loading: false, error: null });
    } catch (error: unknown) {
      const err = error as IApiError;
      setState({ data: null, loading: false, error: err });
    }
  }, [apiFunction]);

  return { ...state, fetch };
};
