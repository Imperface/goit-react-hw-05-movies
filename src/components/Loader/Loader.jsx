import { Section } from 'components';
import { Hourglass } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => (
  <Section>
    <LoaderWrapper>
      <Hourglass
        visible={true}
        height="160"
        width="160"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderWrapper>
  </Section>
);
