// libraries
import React from 'react';

// sass 
import '../../sass/layout/_standardlayout.scss';

interface IStandardLayout {
  children: React.ReactNode;
}

const StandardLayout = ({ children }: IStandardLayout) => {
  
  /**
   * Should end up being something like this:
   * 
   * <main>
   *   <Nav />
   *   { children }
   *   <Footer />
   * </main>
   * 
   */
  return (
    <main className='standardlayout'>
      { children }
    </main>
  );
};

export default StandardLayout;