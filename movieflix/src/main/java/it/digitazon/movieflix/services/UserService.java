package it.digitazon.movieflix.services;


import it.digitazon.movieflix.entities.User;
import it.digitazon.movieflix.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User getById(long id){
        Optional<User> optionalUser = userRepository.findById(id);

        if(optionalUser.isEmpty()){
            throw new IllegalStateException("User not found");
        }

        return optionalUser.get();
    }

    public User create(User newUser){
        if(newUser.getUsername() == null || newUser.getPassword() == null){
            throw new IllegalStateException("Username and Password must not be null");
        }

        newUser = userRepository.save(newUser);
        return newUser;
    }

    public User update(long id, User updateUser){
        if(updateUser.getUsername() == null || updateUser.getPassword() == null){
            throw new IllegalStateException("Username and Password must not be null");
        }

        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isEmpty()){
            throw new IllegalStateException("User not found");
        }
        User entityToUpdate = optionalUser.get();
        updateUser.setId(entityToUpdate.getId());
        updateUser = userRepository.save(updateUser);

        return updateUser;
    }

    public User delete(long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isEmpty()){
            throw new IllegalStateException("User not found");
        }
        User entityToDelete = optionalUser.get();
        userRepository.delete(entityToDelete);
        return entityToDelete;
    }
}
