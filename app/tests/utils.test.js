import { sum, average } from '../js/utils.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('Average function', () => {
    test('average of [2, 4, 6] is 4', () => {
        expect(average([2, 4, 6])).toBe(4);
    });
    
    test('empty array throw ZeroDivisionError excep.', () => {
        expect(() => average([])).toThrow();
        expect(() => average([])).toThrow(Error);
        expect(() => average([])).toThrow('Division by zero');
        expect(() => average([])).toThrow(/zero/);
    });
});

