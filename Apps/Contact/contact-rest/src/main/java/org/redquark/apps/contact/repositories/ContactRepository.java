package org.redquark.apps.contact.repositories;

import org.redquark.apps.contact.models.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, String> {

    @Override
    void delete(Contact deleted);
}
