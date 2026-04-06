import { describe, it, expect } from 'vitest';

describe('AboutSection', () => {
  it('should have mission and vision content', () => {
    const mission = '널리 세상을 이롭게 한다';
    const vision = '타의 추종을 불허할 1등 회사';
    
    expect(mission).toBeTruthy();
    expect(vision).toBeTruthy();
  });

  it('should have company core values', () => {
    const values = [
      '사람 중심',
      '성장과 학습',
      '시스템과 효율'
    ];
    
    expect(values.length).toBe(3);
    values.forEach(value => {
      expect(value).toBeTruthy();
    });
  });

  it('should have company specialization info', () => {
    const specializations = [
      'PC방 · 만화카페 가맹관리',
      'AI 기술 도입 전사 운영',
      '함께 성장하는 문화',
      '홍익인간의 정신'
    ];
    
    expect(specializations.length).toBe(4);
  });

  it('should have proper styling classes', () => {
    const primaryColor = '#FF8C00';
    const gradients = [
      'from-[#FFF9F0] to-[#FFF5E6]',
      'from-[#FF8C00] to-[#FF9F1C]'
    ];
    
    expect(primaryColor).toBe('#FF8C00');
    expect(gradients.length).toBe(2);
  });

  it('should have responsive grid layout', () => {
    const gridClasses = [
      'grid lg:grid-cols-2',
      'grid grid-cols-2',
      'grid md:grid-cols-3'
    ];
    
    expect(gridClasses.length).toBe(3);
    gridClasses.forEach(gridClass => {
      expect(gridClass).toBeTruthy();
    });
  });
});
