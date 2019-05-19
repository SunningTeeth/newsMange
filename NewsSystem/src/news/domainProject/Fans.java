package news.domainProject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Fans {
	@Id
	@GeneratedValue
	private int id;
	private int fansNum;
	private String name;
	private int fansId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getFansNum() {
		return fansNum;
	}
	public void setFansNum(int fansNum) {
		this.fansNum = fansNum;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getFansId() {
		return fansId;
	}
	public void setFansId(int fansId) {
		this.fansId = fansId;
	}
	
	
}
