import { caesar } from '../js/caesar.js';

// Hello World!, key = 1
test('default - key: 1, "Hello World!" gives "Ifmmp Xpsme!"', () => {
    expect(caesar('Hello World!')).toBe('Ifmmp Xpsme!');
})

// Hey Maria!, key = 6
test('default - key: 6, "Hey, Maria!" gives "Nke, Sgxog!"', () => {
    expect(caesar('Hey, Maria!', 6)).toBe('Nke, Sgxog!');
})