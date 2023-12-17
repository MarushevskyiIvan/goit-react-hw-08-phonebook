import { Filter } from '../components/filter/FormFilter.jsx';
import { ContactForm } from '../components/contactForm/ContactForm.jsx';
import { ContactsList } from '../components/contactsList/ContactsList.jsx';
import { ContactsTitle, TextError, Wrapper } from '../components/App.styled.js';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations.js';
import { Loader } from '../components/loader/Loader.jsx';
import { selectError, selectIsLoading } from 'redux/contacts/selectors.js';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {error ? (
        <TextError>Oоps you have a problem ...</TextError>
      ) : (
        <ContactsList />
      )}
    </Wrapper>
  );
};

export default Contacts;
