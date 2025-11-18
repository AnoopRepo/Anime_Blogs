package Backend.demo.Entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.print.Doc;

@Document(collection = "Genre")
@Data
public class Genre {
    @Id
    public String name;
    public String type;
}
