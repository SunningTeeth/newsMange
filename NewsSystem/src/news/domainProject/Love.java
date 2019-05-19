package news.domainProject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Love {
	@Id
	@GeneratedValue
	private int id;
	private int userId;
	private int newsId;
	private String newsName;
	private String newsEditorName;
	private String newsEditorPic;
	private String newsPic;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getNewsId() {
		return newsId;
	}
	public void setNewsId(int newsId) {
		this.newsId = newsId;
	}
	public String getNewsName() {
		return newsName;
	}
	public void setNewsName(String newsName) {
		this.newsName = newsName;
	}
	public String getNewsEditorName() {
		return newsEditorName;
	}
	public void setNewsEditorName(String newsEditorName) {
		this.newsEditorName = newsEditorName;
	}
	public String getNewsEditorPic() {
		return newsEditorPic;
	}
	public void setNewsEditorPic(String newsEditorPic) {
		this.newsEditorPic = newsEditorPic;
	}
	public String getNewsPic() {
		return newsPic;
	}
	public void setNewsPic(String newsPic) {
		this.newsPic = newsPic;
	}
}
