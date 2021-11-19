package cl.tresit.encuesta.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class EncuestaMusica {

	@Id
	private String email;

	@Column(name = "categorias")
	private String categorias;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCategorias() {
		return categorias;
	}

	public void setCategorias(String categorias) {
		this.categorias = categorias;
	}
}
