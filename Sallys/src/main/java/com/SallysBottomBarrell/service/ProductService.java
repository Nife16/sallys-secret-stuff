package com.SallysBottomBarrell.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SallysBottomBarrell.entity.Products;
import com.SallysBottomBarrell.repo.ProductRepo;

@Service
public class ProductService {

	// YOU ONLY AUTOWIRE YOUR REPO OF YOUR OBJECT IN YOUR SERVIES!!!
	// NOTHING ELSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    @Autowired
    ProductRepo productRepo;
	
	public Products save(Products product) {
		// Another predefined function, used to save your objects
		// Id will be autogenerated and will come back in the return after its saved

	    return productRepo.save(product);
	}
	
	public Products update(Products product) throws Exception {
		// Another predefined function, used to save your objects
		// Id will be autogenerated and will come back in the return after its saved

        if(product.getId() != null) {
	        return productRepo.save(product);
        }

        throw new Exception("Object does not exist! id not present");
	}
    
    public Products findById(Integer productId) throws Error {
        
    	// Find by is another predefined repo function, you can always find by the primary key
    	// when you use findById, its good practice to use the isPresent in an if check first
    	// It will tell you if a object was actually found, with true or false values, true if found, false is not
    	// It will always return an Optional Object, the product will be there if found, null if not
    	// If found, give the object back with a .get() to grab it off the Optional object
    	
        if(productRepo.findById(productId).isPresent()) {
            return productRepo.findById(productId).get();
        }
        
        // if product is not present, throw error so front end can handle it
        throw new Error("No product id present, Products not found, send an id billy, dumbass");
        
    }

	public List<Products> findAll() {
		return productRepo.findAll();
	}

    public void deleteById(Integer id) {
	    productRepo.deleteById(id);
	}

    
}
