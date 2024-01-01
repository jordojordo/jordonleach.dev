import {
  describe, beforeEach, afterEach, it, expect
} from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';

import FooterBar from '@/components/FooterBar.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';

describe('FooterBar', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(FooterBar);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the FooterBar correctly', () => {
    expect(wrapper.findComponent(ToggleTheme).exists()).toBeTruthy();
    expect(wrapper.find('a').text()).toContain('Github');
  });

  it('has correct GitHub link with target="_blank"', () => {
    const githubLink = wrapper.find('a[href="https://github.com/jordojordo/personal"]');

    expect(githubLink.exists()).toBeTruthy();
    expect(githubLink.attributes('target')).toBe('_blank');
  });

  it('applies correct classes to the GitHub link', () => {
    const link = wrapper.find('a');

    expect(link.classes()).toContain('link');
    expect(link.classes()).toContain('text-link');
    expect(link.classes()).toContain('text-bold');
    expect(link.classes()).toContain('text-large');
  });
});