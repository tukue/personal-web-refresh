import React, { ReactNode } from 'react';

interface TestWrapperProps {
  children: ReactNode;
}

// A simple wrapper component for tests
const TestWrapper = ({ children }: TestWrapperProps) => {
  return <>{children}</>;
};

export default TestWrapper;