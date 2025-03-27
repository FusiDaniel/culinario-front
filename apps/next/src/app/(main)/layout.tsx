'use client';

import { Navbar, NAVBAR_HEIGHT, View } from '@repo/ui';

const MainNavigationLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <View mb={NAVBAR_HEIGHT}>
      {children}
    </View>
    <View b={0} width="100%" z={1} $platform-web={{ position: 'fixed' }}>
      <Navbar />
    </View>
  </>
);

export default MainNavigationLayout;
