/* eslint-disable @typescript-eslint/ban-ts-comment */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);

import nodeFetch from 'node-fetch';

//@ts-ignore
global.fetch = nodeFetch;
