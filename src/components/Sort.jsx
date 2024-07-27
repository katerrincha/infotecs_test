import React from 'react';

const Sort = (items, config = null) => {
    const [sorted, setSorted] = React.useState(config);
    
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sorted !== null) {
        sortableItems.sort((a, b) => {
          if (sorted.value === 'withoutSorting'){
            return 0;
          }
          if (a[sorted.key] < b[sorted.key]) {
            return sorted.value === 'ascending' ? -1 : 1;
          }
          if (a[sorted.key] > b[sorted.key]) {
            return sorted.value === 'ascending' ? 1 : -1;
          }          
          return 0;
        });
      }
      return sortableItems;
    }, [items, sorted]);
  
    const requestSort = (key, value) => {
     // let direction = value;
      /*if (sorted && sorted.key === key && sorted.value === 'ascending') {
        direction = 'ascending';
      }*/
      setSorted({ key, value });
      
    }
  
    return { items: sortedItems, requestSort, sorted };
  };

  export default Sort;