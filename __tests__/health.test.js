import healthIndicator from '../src/health.js';

describe('healthIndicator', () => {
  test('возвращает healthy, если здоровье больше 50', () => {
    expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('возвращает wounded, если здоровье от 15 до 50 включительно', () => {
    expect(healthIndicator({ name: 'Лучник', health: 50 })).toBe('wounded');
    expect(healthIndicator({ name: 'Воин', health: 20 })).toBe('wounded');
  });

  test('возвращает critical, если здоровье меньше 15', () => {
    expect(healthIndicator({ name: 'Рыцарь', health: 10 })).toBe('critical');
  });
});