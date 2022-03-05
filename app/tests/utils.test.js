import { sum, average } from '../js/utils.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('empty array throw ZeroDivisionError excep.', () => {
    expect(() => average([])).toThrow();
    expect(() => average([])).toThrow(Error);
    expect(() => average([])).toThrow('Division by zero');
    expect(() => average([])).toThrow(/zero/);
});
