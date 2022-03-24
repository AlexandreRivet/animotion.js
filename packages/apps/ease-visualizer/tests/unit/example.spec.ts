import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/Curve.vue';

describe('Curve.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
  });
});
