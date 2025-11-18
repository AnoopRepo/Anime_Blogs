package Backend.demo.Services;

import Backend.demo.Entity.AnimeDis;
import Backend.demo.Repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimeServices {
    @Autowired
    private AnimeRepository repo;

    public boolean saveDesc(AnimeDis anime) {
        repo.save(anime);
        AnimeDis an=repo.findByName(anime.getName());
        return an != null;
    }
}
