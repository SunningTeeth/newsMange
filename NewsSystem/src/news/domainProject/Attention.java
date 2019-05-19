package news.domainProject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/*
 * 用户关注表
 */
@Entity

public class Attention {
	@Id
	@GeneratedValue
	private int id;
	private int fansNum;
	private int attUserId;
	private String attUserName;
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
	public int getAttUserId() {
		return attUserId;
	}
	public void setAttUserId(int attUserId) {
		this.attUserId = attUserId;
	}
	public String getAttUserName() {
		return attUserName;
	}
	public void setAttUserName(String attUserName) {
		this.attUserName = attUserName;
	}
	
	
}
