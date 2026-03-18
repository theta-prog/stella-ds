import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './.storybook/preview';

const annotations = setProjectAnnotations([projectAnnotations]);

beforeAll(annotations.beforeAll);
