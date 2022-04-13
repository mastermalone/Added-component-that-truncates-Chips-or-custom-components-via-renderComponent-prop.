//@ts-ignore
import React, { useState, useTransition } from 'react';
import withHooks, { mapHooksToProps } from '../../common/withHooks';
import ProductsData from '../../components/ProductsData';

import UseTransitionPageTemplate from './UseTransitionPage';

const hooks = mapHooksToProps(() => {
  const { productsData } = ProductsData();
  const [filteredValue, setFilteredValue] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const filteredProducts = (value: string) => {
    if (!value) {
      return productsData;
    }

    return productsData.filter((data) => data.title.includes(value));
  };

  const filteredProductData = filteredProducts(filteredValue);

  const filterUpdate = (evt: React.ChangeEvent<HTMLInputElement>) => {
    /**
     * Here we can use this function to tell React that we want to
     * run this state update after any other UI updates.  This will
     * help keep the UI elements such as a text field be more
     * responsive on machines that have less CPU power when
     * filtering through a large list of data
     *
     * We also get to se the isPending value from the useTransition hook
     * to show when the transition has or has not completed its process.
     *
     * We can use it to display a loading state for the app or, whatever else we need.
     */
    startTransition(() => {
      setFilteredValue(evt.target.value);
    });
  };

  return {
    filteredProductData,
    filterUpdate,
    isPending,
  };
});

const UseTransitionPage = withHooks(UseTransitionPageTemplate, hooks);

export default UseTransitionPage;
