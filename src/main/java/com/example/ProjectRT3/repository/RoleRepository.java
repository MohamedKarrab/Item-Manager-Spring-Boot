package com.example.ProjectRT3.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.ProjectRT3.model.ERole;
import com.example.ProjectRT3.model.Role;
public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
