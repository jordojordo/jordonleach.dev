import {
  describe, beforeEach, afterEach, it, expect
} from 'vitest';
import { RouterLink, createRouter, createWebHistory } from 'vue-router';
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils';

import type { RouteRecordRaw } from 'vue-router';

import NavBar from '../NavBar.vue';

const DummyComponent = { template: '<div></div>' };

const routes: RouteRecordRaw[] = [
  {
    path:      '/',
    component: DummyComponent,
    name:      'Home'
  },
  {
    path:      '/projects',
    component: DummyComponent,
    name:      'Projects'
  },
  {
    path:      '/work',
    component: DummyComponent,
    name:      'Work'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const navBarConfig = {
  global: {
    plugins: [router],
    stubs:   { RouterLink: RouterLinkStub }
  }
};

describe('NavBar', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(NavBar, navBarConfig);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders all navigation links', () => {
    expect(wrapper.text()).toContain("Jordo's Territory");
    expect(wrapper.text()).toContain('Projects');
    expect(wrapper.text()).toContain('Work');
  });

  it('has correct navigation URLs', () => {
    const links = wrapper.findAllComponents(RouterLink);

    links.forEach((link, index) => {
      expect(link.props('to')).toBe(routes[index].path);
    });
  });

  it('applies correct classes to links', () => {
    const links = wrapper.findAll('.link');

    links.forEach((link) => {
      expect(link.classes()).toContain('text-highlight');
      expect(link.classes()).toContain('text-bold');
      expect(link.classes()).toContain('text-large');
    });
  });
});
