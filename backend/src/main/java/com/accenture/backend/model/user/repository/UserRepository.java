package com.accenture.backend.model.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.accenture.backend.model.user.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

    Optional<Users> findByEmailAndPassword(String email, String password);

    boolean existsByEmailOrPassword(String email, String password);

}
