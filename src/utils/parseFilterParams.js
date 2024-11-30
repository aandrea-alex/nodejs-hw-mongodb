function parseBoolean(value) {
  if (typeof value === 'string') {
    const lowerValue = value.toLowerCase();
    if (lowerValue === 'true') {
      return true;
    }
    if (lowerValue === 'false') {
      return false;
    }
  }
  return undefined;
}
  
  const parseContactType = (type) => {
    const isString = typeof type === 'string';
    if (!isString) return;
    const isValidType = (type) => ['work', 'home', 'personal'].includes(type);
  
    if (isValidType(type)) return type;
  };
  
  export const parseFilterParams = (query) => {
    const { isFavourite, contactType } = query;
    console.log('FILTER parseFilterParams = ', { isFavourite, contactType } );
    const parsedFavoriteStatus = parseBoolean(isFavourite);
    const parsedContactType = parseContactType(contactType);
   
    return {
      isFavourite: parsedFavoriteStatus,
      contactType: parsedContactType,
    };
  };
