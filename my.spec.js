import { expect, vi, test } from 'vitest';

vi.mock('already', () => {
  return {
    defer: "mocked"
  };
});

test('renders name', async () => {
  const { defer } = await import('already');
  expect(typeof defer).toBe("string");
})
