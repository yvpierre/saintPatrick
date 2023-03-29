package com.patrick.Repository;

import com.patrick.Entity.Command;
import org.springframework.data.repository.CrudRepository;

public interface CommandRepository extends CrudRepository<Command,Long > {
}
