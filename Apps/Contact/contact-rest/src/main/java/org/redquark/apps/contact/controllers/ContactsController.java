package org.redquark.apps.contact.controllers;

import org.redquark.apps.contact.models.Contact;
import org.redquark.apps.contact.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@RestController
public class ContactsController {

    @Autowired
    private ContactRepository repository;

    @RequestMapping(method = RequestMethod.GET, value = "/contacts")
    public Iterable<Contact> contact() {
        return repository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/contacts")
    public Contact save(@RequestBody Contact contact) {
        repository.save(contact);
        return contact;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/contacts/{id}")
    public Optional<Contact> show(@PathVariable String id) {
        return repository.findById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/contacts/{id}")
    public Contact update(@PathVariable String id, @RequestBody Contact contact) {
        Optional<Contact> optionalContact = repository.findById(id);
        Contact c = optionalContact.orElse(null);
        if (contact.getName() != null) {
            Objects.requireNonNull(c).setName(contact.getName());
        }
        if (contact.getAddress() != null) {
            Objects.requireNonNull(c).setName(contact.getAddress());
        }
        if (contact.getCity() != null) {
            Objects.requireNonNull(c).setCity(contact.getCity());
        }
        if (contact.getPhone() != null) {
            Objects.requireNonNull(c).setPhone(contact.getPhone());
        }
        if (contact.getEmail() != null) {
            Objects.requireNonNull(c).setEmail(contact.getEmail());
        }
        repository.save(Objects.requireNonNull(c));
        return c;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/contacts/{id}")
    public String delete(@PathVariable String id) {
        Optional<Contact> optionalContact = repository.findById(id);
        Contact contact = optionalContact.orElse(null);
        repository.delete(Objects.requireNonNull(contact));
        return "";
    }
}
