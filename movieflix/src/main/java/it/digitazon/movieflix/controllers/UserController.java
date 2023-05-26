package it.digitazon.movieflix.controllers;


import it.digitazon.movieflix.dto.UserDTO;
import it.digitazon.movieflix.entities.User;
import it.digitazon.movieflix.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<UserDTO> getUsers(){
        return userService.getAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable long id){
        return convertToDTO(userService.getById(id));
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO newUser){
        User user = convertToEntity(newUser);
        user = userService.create(user);

        return convertToDTO(user);
    }

    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable long id, @RequestBody UserDTO updateUser){
        User user = convertToEntity(updateUser);
        user = userService.update(id, user);

        return convertToDTO(user);
    }

    @DeleteMapping("/{id}")
    public UserDTO deleteUser(@PathVariable long id){
        return convertToDTO(userService.delete(id));
    }

    private UserDTO convertToDTO(User user){
        return modelMapper.map(user, UserDTO.class);
    }

    private User convertToEntity(UserDTO dto){
        User user = modelMapper.map(dto, User.class);

        return user;
    }
}
