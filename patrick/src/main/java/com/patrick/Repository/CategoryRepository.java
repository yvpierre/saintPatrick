package com.patrick.Repository;

import com.patrick.Entity.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category,Long > {
}
