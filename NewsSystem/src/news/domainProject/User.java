package news.domainProject;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
@Entity
public class User {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	@OneToMany(targetEntity=Attention.class,cascade=CascadeType.ALL ,fetch=FetchType.EAGER)
	@JoinColumn(name="userId" ,referencedColumnName="id")
	private Set<Attention> atts;
	@OneToMany(targetEntity=Fans.class,cascade=CascadeType.ALL ,fetch=FetchType.EAGER)
	@JoinColumn(name="userId" ,referencedColumnName="id")
	private Set<Fans> fans;
	@OneToMany(targetEntity=Love.class,cascade=CascadeType.ALL ,fetch=FetchType.EAGER)
	@JoinColumn(name="userId" ,referencedColumnName="id")
	private Set<Love> love;
	private String phone;
	private String sex;
	private String nickName;
	private String headPic;
	private String password;
	
	
	
	
	public Set<Love> getLove() {
		return love;
	}
	public void setLove(Set<Love> love) {
		this.love = love;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<Attention> getAtts() {
		return atts;
	}
	public void setAtts(Set<Attention> atts) {
		this.atts = atts;
	}
	public Set<Fans> getFans() {
		return fans;
	}
	public void setFans(Set<Fans> fans) {
		this.fans = fans;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getHeadPic() {
		return headPic;
	}
	public void setHeadPic(String headPic) {
		this.headPic = headPic;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
