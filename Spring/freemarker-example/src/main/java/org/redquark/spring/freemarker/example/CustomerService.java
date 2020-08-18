package org.redquark.spring.freemarker.example;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class CustomerService {

    private static final List<Customer> CUSTOMERS = new ArrayList<>();

    static {
        CUSTOMERS.add(new Customer(101, "Steve", "steve@apple.com", LocalDate.of(1955, 2, 24)));
        CUSTOMERS.add(new Customer(201, "Bill", "bill@microsoft.com", LocalDate.of(1955, 10, 28)));
        CUSTOMERS.add(new Customer(301, "Larry", "larry@gmail.com", LocalDate.of(1973, 8, 21)));
        CUSTOMERS.add(new Customer(401, "Sergey", "sergey@abc.xyz", LocalDate.of(1973, 3, 26)));
    }

    public List<Customer> findAll() {
        return CUSTOMERS;
    }

    public void add(Customer customer) {
        customer.setCustomerId(generateRandomId());
        CUSTOMERS.add(customer);
    }

    public List<Customer> remove(int customerId) {
        boolean isRemoved = CUSTOMERS.removeIf(c -> c.getCustomerId() == customerId);
        return isRemoved ? findAll() : Collections.emptyList();
    }

    public Optional<Customer> find(int customerId) {
        return CUSTOMERS.stream().filter(c -> c.getCustomerId() == customerId).findFirst();
    }

    private int generateRandomId() {
        return new Random().nextInt(1000);
    }
}
