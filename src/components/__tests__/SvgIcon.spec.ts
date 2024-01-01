import {
  describe, it, expect, vi, beforeEach, afterEach
} from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';

import SvgIcon from '@/components/SvgIcon.vue';

// Mock for the dynamic import
vi.mock('@/assets/images/', () => ({
  default: vi.fn((path) => {
    if ( !path.includes('open-in-window') ) {
      throw new Error('File not found');
    }

    return 'SvgIcon';
  }),
}));

describe('SvgIcon', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(SvgIcon, { props: { svgName: 'open-in-window' } });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('imports the correct SVG based on svgName prop', async() => {
    await wrapper.vm.$nextTick(); // Wait for the component to update
    expect(wrapper.findComponent({ name: 'SvgIcon' }).exists()).toBe(true);
  });
});
