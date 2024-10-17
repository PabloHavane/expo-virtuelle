import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import for jest-dom matchers

// Test simple pour vérifier si 1 + 1 = 2
test('simple math test', () => {
    expect(1 + 1).toBe(2);
});

// Test simple pour vérifier si 2 * 2 = 4
test('simple multiplication test', () => {
    expect(2 * 2).toBe(4);
});

// Test simple pour vérifier si 5 - 3 = 2
test('simple subtraction test', () => {
    expect(5 - 3).toBe(2);
});

// Test simple pour vérifier si 10 / 2 = 5
test('simple division test', () => {
    expect(10 / 2).toBe(5);
});

