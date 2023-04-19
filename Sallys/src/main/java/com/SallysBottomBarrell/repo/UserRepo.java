package com.SallysBottomBarrell.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.SallysBottomBarrell.entity.User;

// Annotate to create a spring bean of the repo
@Repository         // Between the <,> first put the type of object, next the type of the primary key
public interface UserRepo extends JpaRepository<User, Integer> {

    @Query(value="select * from user where email = ?1 and password = ?2", nativeQuery = true)
    public User signIn(String email, String password);
    
}
