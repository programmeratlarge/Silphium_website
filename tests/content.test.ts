import { describe, it, expect } from 'vitest';
import { headerNav, footerNav, disclaimers, partnerCta } from '../content/site';
import { team } from '../content/team';
import { milestones, developmentStage } from '../content/milestones';
import { companyBoilerplate } from '../content/press';
import { INQUIRY_TYPES } from '../lib/constants';

describe('headerNav', () => {
  it('has at least one item', () => {
    expect(headerNav.length).toBeGreaterThan(0);
  });

  it('every item has a non-empty label and href', () => {
    for (const item of headerNav) {
      expect(item.label.trim()).not.toBe('');
      expect(item.href.trim()).not.toBe('');
    }
  });

  it('every href starts with /', () => {
    for (const item of headerNav) {
      expect(item.href).toMatch(/^\//);
    }
  });

  it.each(['/science', '/development', '/team', '/press', '/contact'])(
    'includes required link "%s"',
    (href) => {
      expect(headerNav.some((item) => item.href === href)).toBe(true);
    }
  );
});

describe('footerNav', () => {
  it('every item has a non-empty label and href', () => {
    for (const item of footerNav) {
      expect(item.label.trim()).not.toBe('');
      expect(item.href.trim()).not.toBe('');
    }
  });

  it.each(['/science', '/development', '/press', '/contact', '/privacy'])(
    'includes required link "%s"',
    (href) => {
      expect(footerNav.some((item) => item.href === href)).toBe(true);
    }
  );
});

describe('disclaimers', () => {
  it('short disclaimer is non-empty', () => {
    expect(disclaimers.short.trim()).not.toBe('');
  });

  it('footer disclaimer is non-empty', () => {
    expect(disclaimers.footer.trim()).not.toBe('');
  });

  it('contact disclaimer is non-empty', () => {
    expect(disclaimers.contact.trim()).not.toBe('');
  });

  it('short disclaimer states no approved product', () => {
    expect(disclaimers.short.toLowerCase()).toContain('no approved product');
  });

  it('short disclaimer states no clinical trial enrollment', () => {
    expect(disclaimers.short.toLowerCase()).toContain('not currently enrolling clinical trials');
  });

  it('footer disclaimer contains "investigational"', () => {
    expect(disclaimers.footer.toLowerCase()).toContain('investigational');
  });

  it('footer disclaimer states no product is approved', () => {
    expect(disclaimers.footer.toLowerCase()).toMatch(/no .* product is approved/);
  });

  it('contact disclaimer warns against personal medical information', () => {
    expect(disclaimers.contact.toLowerCase()).toContain('personal medical information');
  });

  it('no disclaimer makes a positive approval or availability claim', () => {
    const overclaiming = ['clinically proven', 'proven safe', 'buy now', 'enroll now', 'now available', 'safe and effective'];
    for (const phrase of overclaiming) {
      expect(disclaimers.short.toLowerCase()).not.toContain(phrase);
      expect(disclaimers.footer.toLowerCase()).not.toContain(phrase);
      expect(disclaimers.contact.toLowerCase()).not.toContain(phrase);
    }
  });
});

describe('partnerCta', () => {
  it('has a non-empty headline and body', () => {
    expect(partnerCta.headline.trim()).not.toBe('');
    expect(partnerCta.body.trim()).not.toBe('');
  });

  it('CTA links to /contact', () => {
    expect(partnerCta.cta.href).toBe('/contact');
  });
});

describe('team', () => {
  it('has at least one member', () => {
    expect(team.length).toBeGreaterThan(0);
  });

  it('every member has a non-empty name', () => {
    for (const member of team) {
      expect(member.name.trim()).not.toBe('');
    }
  });

  it.each(['Jelena Lujic', 'Paula E. Cohen', 'Christopher A. Alabi', 'Militsa Yavorova', 'Carmyn Polk'])(
    'includes founder-approved member "%s"',
    (name) => {
      expect(team.some((m) => m.name === name)).toBe(true);
    }
  );
});

describe('milestones', () => {
  const VALID_STATUSES = new Set(['completed', 'current', 'planned', 'future']);

  it('has at least one milestone', () => {
    expect(milestones.length).toBeGreaterThan(0);
  });

  it('every milestone has non-empty title, status, and description', () => {
    for (const m of milestones) {
      expect(m.title.trim()).not.toBe('');
      expect(m.status.trim()).not.toBe('');
      expect(m.description.trim()).not.toBe('');
    }
  });

  it('every milestone status is a valid MilestoneStatus value', () => {
    for (const m of milestones) {
      expect(VALID_STATUSES.has(m.status)).toBe(true);
    }
  });

  it('Discovery milestone appears before Clinical Trials in order', () => {
    const discoveryIndex = milestones.findIndex((m) =>
      m.title.toLowerCase().includes('discovery')
    );
    const trialIndex = milestones.findIndex((m) =>
      m.title.toLowerCase().includes('clinical trials')
    );
    expect(discoveryIndex).toBeGreaterThanOrEqual(0);
    expect(trialIndex).toBeGreaterThanOrEqual(0);
    expect(discoveryIndex).toBeLessThan(trialIndex);
  });

  it('Clinical Trials milestone states no trial is currently active', () => {
    const trialMilestone = milestones.find((m) =>
      m.title.toLowerCase().includes('clinical trials')
    );
    expect(trialMilestone).toBeDefined();
    expect(trialMilestone!.description.toLowerCase()).toContain('no trial');
  });

  it('Clinical Trials milestone has status "future"', () => {
    const trialMilestone = milestones.find((m) =>
      m.title.toLowerCase().includes('clinical trials')
    );
    expect(trialMilestone?.status).toBe('future');
  });

  it('no "future" milestone claims human efficacy or approval', () => {
    const futureMilestones = milestones.filter((m) => m.status === 'future');
    const overclaiming = ['proven', 'approved', 'works in humans', 'safe and effective'];
    for (const m of futureMilestones) {
      for (const phrase of overclaiming) {
        expect(m.description.toLowerCase()).not.toContain(phrase);
      }
    }
  });
});

describe('developmentStage', () => {
  it('mentions preclinical development', () => {
    expect(developmentStage.toLowerCase()).toContain('preclinical');
  });
});

describe('companyBoilerplate', () => {
  it('states no product is approved', () => {
    expect(companyBoilerplate.toLowerCase()).toContain('no product is approved');
  });

  it('mentions preclinical development', () => {
    expect(companyBoilerplate.toLowerCase()).toContain('preclinical');
  });

  it('mentions investigational', () => {
    expect(companyBoilerplate.toLowerCase()).toContain('investigational');
  });
});

describe('INQUIRY_TYPES', () => {
  it('contains expected inquiry categories', () => {
    expect(INQUIRY_TYPES).toContain('press');
    expect(INQUIRY_TYPES).toContain('investor');
    expect(INQUIRY_TYPES).toContain('partnership');
    expect(INQUIRY_TYPES).toContain('collaboration');
    expect(INQUIRY_TYPES).toContain('general');
  });

  it('has no duplicate values', () => {
    const unique = new Set(INQUIRY_TYPES);
    expect(unique.size).toBe(INQUIRY_TYPES.length);
  });
});
