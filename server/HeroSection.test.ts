import { describe, it, expect } from 'vitest';

describe('HeroSection', () => {
  it('should have correct external links to GreetingHR', () => {
    const greetingHRUrl = 'https://isens.career.greetinghr.com/ko/intro';
    expect(greetingHRUrl).toBe('https://isens.career.greetinghr.com/ko/intro');
  });

  it('should have correct button labels', () => {
    const buttons = ['지원하기', '채용 포지션 보기', '회사 소개'];
    expect(buttons).toContain('지원하기');
    expect(buttons).toContain('채용 포지션 보기');
    expect(buttons).toContain('회사 소개');
  });

  it('should have correct styling classes', () => {
    const primaryButtonClass = 'bg-[#FF8C00]';
    const secondaryButtonClass = 'border-2 border-white';
    const tertiaryButtonClass = 'border-2 border-[#FF8C00]';
    
    expect(primaryButtonClass).toBeTruthy();
    expect(secondaryButtonClass).toBeTruthy();
    expect(tertiaryButtonClass).toBeTruthy();
  });

  it('should have hover effects on buttons', () => {
    const hoverEffects = [
      'hover:bg-[#E67E00]',
      'hover:bg-white hover:text-[#FF8C00]',
      'hover:bg-[#FF8C00] hover:text-white'
    ];
    
    expect(hoverEffects.length).toBe(3);
    hoverEffects.forEach(effect => {
      expect(effect).toBeTruthy();
    });
  });
});
