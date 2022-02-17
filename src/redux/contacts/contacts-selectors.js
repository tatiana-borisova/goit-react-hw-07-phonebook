export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;
export const getVisibleContacts = state => {
  const allItems = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter(
    item =>
      item.name.toLowerCase().includes(normalizedFilter) ||
      item.number.includes(normalizedFilter),
  );
};
