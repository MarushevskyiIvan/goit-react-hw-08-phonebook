import { useDispatch, useSelector } from 'react-redux';

import { filter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = useSelector(selectFilter);

  return (
    <input
      value={contactFilter}
      type="text"
      name="filter"
      onChange={evt => dispatch(filter(evt.target.value))}
    />
  );
};
