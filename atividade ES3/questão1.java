import java.util.Date;
import java.io.FileWriter;
import java.io.IOException;

public class Post {
    private int id;
    private String texto;
    private Autor autor;
    private Date data;
    private int quantidadeDeLikes;

    public Post(int id, String texto, Autor autor, Date data) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.data = new Date(data.getTime());
        this.quantidadeDeLikes = 0;
    }

    public int getId() {
        return id;
    }

    public String getTexto() {
        return texto;
    }

    public Autor getAutor() {
        return autor;
    }

    public Date getData() {
        return new Date(data.getTime());
    }

    public int getQuantidadeDeLikes() {
        return quantidadeDeLikes;
    }
}

public class RepositorioDePosts {
    private String filePath;

    public RepositorioDePosts(String filePath) {
        this.filePath = filePath;
    }

    public void saveToFile(Post post) {
        try (FileWriter writer = new FileWriter(filePath)) {
            writer.write("ID: " + post.getId() + "\n");
            writer.write("Texto: " + post.getTexto() + "\n");
            writer.write("Autor: " + post.getAutor().getNome() + "\n");
            writer.write("Data: " + post.getData() + "\n");
            writer.write("Quantidade de Likes: " + post.getQuantidadeDeLikes() + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

public class Autor {
    private int id;
    private String nome;
    private String email;

    public Autor(int id, String nome, String email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

public class Teste {
    public static void main(String[] args) {
        Autor autor = new Autor(1, "Autor 1", "autor1@email.com");
        Date data = new Date();
        Post post = new Post(1, "Texto do post", autor, data);

        RepositorioDePosts repositorio = new RepositorioDePosts("post.txt");
        repositorio.saveToFile(post);
    }
}
}
