/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ExecutionEnvironment from './ExecutionEnvironment';

function BrowserOnly({
  children,
  fallback,
}: {
  children?: () => JSX.Element;
  fallback?: JSX.Element;
}): JSX.Element | undefined {
  if (!ExecutionEnvironment.canUseDOM || children == null) {
    return fallback || undefined;
  }

  return <>{children()}</>;
}

export default BrowserOnly;
