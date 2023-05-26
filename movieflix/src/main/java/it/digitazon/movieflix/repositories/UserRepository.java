package it.digitazon.movieflix.repositories;

import it.digitazon.movieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
