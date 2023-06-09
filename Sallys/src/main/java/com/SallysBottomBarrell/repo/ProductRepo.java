package com.SallysBottomBarrell.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.SallysBottomBarrell.entity.Products;

// Annotate to create a spring bean of the repo
@Repository         // Between the <,> first put the type of object, next the type of the primary key
public interface ProductRepo extends JpaRepository<Products, Integer> {
    
}
