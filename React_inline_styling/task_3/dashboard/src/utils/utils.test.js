// Import the function to be tested
import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils.js';

// Test the getCurrentYear function
describe('getCurrentYear', () => {
  it('should return the current year', () => {
    const currentYear = getCurrentYear();
    expect(currentYear).toBe(new Date().getFullYear());
  });
});

// Test for getFooterCopy function
describe('getFooterCopy function', () => {
  test('should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });
  test('should return "Holberton School Main Dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School Main Dashboard');
  });
});

// Test for getLatestNotification function
describe('getLatestNotification function', () => {
  test('should return "<strong>Urgent Requirement</strong> - complete by EOD"', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent Requirement</strong> - complete by EOD');
  });
});
